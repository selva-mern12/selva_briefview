import { useEffect, useState } from 'react';

export const sections = ["overview", "projects", "skills", "resume", "contact"] as const;
export type SectionType = typeof sections[number];

export const useActiveSection = (threshold: number = 0.6) => {
  const [activeTab, setActiveTab] = useState<SectionType>("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible && sections.includes(visible.target.id as SectionType)) {
          setActiveTab(visible.target.id as SectionType);
        }
      },
      { threshold }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return activeTab;
};
