import { NextRequest, NextResponse } from 'next/server'
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.MONGO_URI || ''

interface IReview extends mongoose.Document {
  name: string
  email?: string
  project?: string
  rating: number
  feedback?: string
  approved: boolean
}

// Connect to MongoDB
export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'MyPortfolio',
    })
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
    throw new Error('Database connection failed')
  }
}

// Define Mongoose Schema
const reviewSchema = new mongoose.Schema<IReview>(
  {
    name: { type: String, required: true },
    email: { type: String },
    project: { type: String },
    rating: { type: Number, required: true },
    feedback: { type: String },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

// Prevent re-defining model on hot-reload
const Review = mongoose.models['PortfolioReview'] || mongoose.model<IReview>('PortfolioReview', reviewSchema)

const sendSelfMail = async (name: string, email: string, project: string, rating: number, feedback: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use 'smtp.mailtrap.io' for testing
    auth: {
      user: process.env.MAIL_USER, // your Gmail or SMTP user
      pass: process.env.MAIL_PASS, // your Gmail App Password or SMTP password
    },
  });

  const mailOptions = {
    from: `"Portfolio Feedback" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER, // send to yourself
    subject: `💬 New Feedback from ${name}`,
    html: `
      <h3>You've received new feedback</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Project:</strong> ${project}</p>
      <p><strong>Rating:</strong> ${rating} ⭐</p>
      <p><strong>Message:</strong></p>
      <p>${feedback}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// POST /api/review
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const { name, email, project, rating, feedback } = await req.json()

    if (!name || typeof rating !== 'number') {
      return NextResponse.json(
        { message: 'Name and rating are required, and rating must be a number' },
        { status: 400 }
      )
    }
    await sendSelfMail(name, email, project, rating, feedback)
    const created = await Review.create({ name, email, project, rating, feedback })
    return NextResponse.json({ message: 'Review submitted', data: created }, { status: 201 })
  } catch (err) {
    console.error('❌ POST Error:', err)
    return NextResponse.json({ message: 'Server error', error: (err as Error).message }, { status: 500 })
  }
}

// PUT /api/review
export async function PUT(req: NextRequest) {
  try {
    await connectDB()
    const { id } = await req.json()

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 })
    }

    const updated = await Review.findByIdAndUpdate(id, { approved: true }, { new: true })

    if (!updated) {
      return NextResponse.json({ message: 'Review not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Review updated', data: updated }, { status: 200 })
  } catch (err) {
    console.error('❌ PUT Error:', err)
    return NextResponse.json({ message: 'Server error', error: (err as Error).message }, { status: 500 })
  }
}

// GET /api/review
export async function GET() {
  try {
    await connectDB()
    const reviews = await Review.find().sort({ createdAt: -1 })
    return NextResponse.json({ message: 'Reviews fetched', data: reviews }, { status: 200 })
  } catch (err) {
    console.error('❌ GET Error:', err)
    return NextResponse.json({ message: 'Server error', error: (err as Error).message }, { status: 500 })
  }
}

// DELETE /api/review?id=<id>
export async function DELETE(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ message: 'Review ID is required' }, { status: 400 })
    }

    const deleted = await Review.findByIdAndDelete(id)

    if (!deleted) {
      return NextResponse.json({ message: 'Review not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Review deleted', data: deleted }, { status: 200 })
  } catch (err) {
    console.error('❌ DELETE Error:', err)
    return NextResponse.json({ message: 'Server error', error: (err as Error).message }, { status: 500 })
  }
}