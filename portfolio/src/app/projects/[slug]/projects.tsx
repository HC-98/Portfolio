// Define the Project type
export type Project = {
  title: string;
  summary: string;
  content: string;
  stack: string[];
  theme: {
    gradient: string;
    accent: string;
    icon: string;
  };
};

// Projects data
export const projects: Record<string, Project> = {
  "quran-word-addin": {
    title: "Qur’an Word Add-in",
    summary:
      "A Microsoft Word add-in to insert Qur’ān verses with translations, deployed via Azure Static Web Apps.",
    content: `
### Overview
The Qur’an Word Add-in is a custom-built Microsoft Word add-in that enables users to seamlessly insert Qur’ān verses in the Uthmānī script into Word documents.  

It also supports translations (currently Dutch, with future extensibility).
    
### Key Features
- Insert Qur’an verses in authentic Uthmānī script  
- Dutch translation by Sofian S. Siregar  
- Insert Basmala button  
- Azure Static Web Apps deployment + Microsoft 365 org-wide distribution  

### Impact
This project blends faith + technology, making it easier for students, researchers, and professionals to use the Qur’ān in their workflow.
    `,
    stack: ["TypeScript", "Office.js", "Webpack", "Azure Static Web Apps"],
    theme: {
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      accent: "text-emerald-600",
      icon: "📖",
    },
  },
  "canvas-attendance": {
    title: "Canvas Custom Attendance System",
    summary:
      "Extended Canvas LMS with custom attendance tracking using React + Azure Functions.",
    content: `
### Overview
A custom attendance and student management system built on top of the Canvas LMS API.  

Teachers and admins can track attendance, student engagement, and manage course data beyond Canvas’ defaults.

### Key Features
- Syncs users/courses from Canvas API  
- Session-based attendance tracking  
- Pronoun + identity mapping (Broeder/Zuster)  
- Azure Functions backend + React frontend  

### Impact
Simplified teacher workflows and gave admins consolidated student presence + grade overviews.
    `,
    stack: ["React", "Azure Functions", "Canvas API", "Azure Table Storage"],
    theme: {
      gradient: "from-indigo-500 via-blue-500 to-sky-600",
      accent: "text-indigo-600",
      icon: "📊",
    },
  },
  "moneybird-telegram": {
    title: "Moneybird Telegram Bot",
    summary:
      "A secure Telegram bot for my dad’s business to create and send invoices directly from chat.",
    content: `
### Overview
Built a Telegram bot powered by Azure Functions (.NET 8 isolated model) to automate invoice workflows with Moneybird API.

### Key Features
- Step-by-step conversational flow for invoices  
- Customer creation/selection inside Telegram  
- Preview PDF before sending  
- Secure access via whitelisted Telegram IDs  

### Impact
Helped a small business (my dad’s upholstery company) save time and reduce mistakes in invoicing.
    `,
    stack: [".NET 8", "Azure Functions", "Telegram Bot API", "Moneybird API"],
    theme: {
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      accent: "text-orange-600",
      icon: "💸",
    },
  },
};
