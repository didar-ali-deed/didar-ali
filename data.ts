export const profile = {
  name: "Didar Ali",
  firstName: "Didar",
  title: "Junior Data Scientist | Machine Learning | Data Analytics",
  roleLine: "Data Analyst · AI/ML Engineer",
  location: "Rawalpindi, Pakistan",
  locationNote: "open to relocation",
  email: "didarali1129@gmail.com",
  phone: "+92 342 0032958",
  github: "https://github.com/didar-ali-deed",
  linkedin: "https://linkedin.com/in/didar-ali-deed",
  photo: "/Deed.png",
  resume: "/Didar_Ali_Data_Analyst.pdf",
  summary:
    "Data analyst and AI/ML builder with a Computer Systems Engineering background and hands-on experience turning messy data and research ideas into useful systems. I work across Python, SQL, dashboards, machine learning, computer vision, OCR, and production AI workflows — with a focus on making the result clear, testable, and ready to use.",
  tagline: "Turning raw data into decisions and models into useful tools.",
  availability: "Available for opportunities",
  heroStats: [
    { value: "~79%", label: "SER accuracy" },
    { value: "1M", label: "cleaned taxi trips" },
    { value: "2025", label: "published research" },
  ],
};

export const focusAreas = [
  {
    eyebrow: "DATA ANALYSIS",
    title: "From raw tables to decisions.",
    copy: "I clean, model, query, and visualize data so patterns become clear enough to support a real decision.",
    tags: ["SQL", "Pandas", "Power BI"],
  },
  {
    eyebrow: "AI / ML ENGINEERING",
    title: "From models to usable systems.",
    copy: "I connect machine-learning ideas to practical interfaces, APIs, validation steps, and end-to-end workflows.",
    tags: ["PyTorch", "Transformers", "FastAPI"],
  },
  {
    eyebrow: "DELIVERY",
    title: "Clear, testable, production-minded.",
    copy: "I care about the layer around the model: reproducible pipelines, readable outputs, and tools people can actually use.",
    tags: ["Docker", "Git", "Linux"],
  },
];

export const experience = [
  {
    role: "AI Engineer I",
    company: "Xflow Research Inc.",
    location: "Islamabad",
    period: "Feb 2026 – May 2026",
    points: [
      "Built OCR, computer-vision, and identity-verification pipelines.",
      "Worked with NFC e-passport chip reading and document intelligence workflows.",
      "Tested and validated multi-stage AI pipelines for production use cases.",
    ],
  },
];

export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  impact: string;
  tags: string[];
  bullets: string[];
  image?: string;
  imageLabel?: string;
  gallery?: string[];
  metrics?: string[];
  repository?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "NYC Taxi Pulse",
    type: "Data Analytics · Business Intelligence",
    description: "An end-to-end analytics project turning public NYC TLC Yellow Taxi records into decision-ready demand, revenue, zone, and traffic insights.",
    impact: "1M cleaned trips · $27.30M recorded revenue",
    tags: ["Python", "SQL", "SQLite", "Power BI"],
    image: "/nyc-taxi-pulse/overview.png",
    imageLabel: "POWER BI / ANALYTICS",
    gallery: ["/nyc-taxi-pulse/geography.png", "/nyc-taxi-pulse/time-patterns.png", "/nyc-taxi-pulse/demand-heatmap.png"],
    metrics: ["18:00 busiest pickup hour", "JFK: 49,673 trips", "12.37 mph average speed"],
    repository: "https://github.com/didar-ali-deed/nyc-taxi-pulse",
    bullets: [
      "Built a reproducible workflow from public TLC Parquet ingestion through pandas/NumPy cleaning, SQLite modeling, analytical SQL, and dashboard design.",
      "Retained 1,000,000 cleaned trips from January 1 through February 28, 2023 after validation and filtering.",
      "Found that 18:00 was the busiest pickup hour with 71,329 trips and that JFK Airport led pickup volume with 49,673 trips.",
      "Created Python visualizations and a three-page Power BI report covering overview, geography, and time patterns.",
    ],
  },
  {
    number: "02",
    title: "Speech Emotion Recognition System",
    type: "Research · Audio ML",
    description: "A transformer-based pipeline that recognizes emotion from speech and turns raw audio into meaningful vocal sentiment signals.",
    impact: "~79% accuracy · Published research",
    tags: ["Wav2Vec2", "Transformers", "Signal Processing"],
    image: "/projects/speech-training-curves.png",
    imageLabel: "RESEARCH / TRAINING",
    gallery: ["/projects/speech-class-metrics.png"],
    repository: "https://github.com/didar-ali-deed/Vocal-Sentiment-Transformer-Based-Speech-Emotion-Recognition",
    bullets: [
      "Built an end-to-end speech emotion recognition pipeline around Wav2Vec2.",
      "Applied signal processing and transformer fine-tuning to audio inputs.",
      "Achieved ~79% accuracy and published the work in VFAST Transactions 2025.",
    ],
  },
  {
    number: "03",
    title: "Identity Verification & Document Intelligence",
    type: "Computer Vision · Automation",
    description: "A multi-stage workflow for extracting, verifying, and validating identity data from documents and NFC e-passports.",
    impact: "OCR + CV + NFC validation pipeline",
    tags: ["OCR", "Computer Vision", "NFC", "Data Validation"],
    image: "/projects/idv-pipeline.svg",
    imageLabel: "OCR / IDENTITY PIPELINE",
    bullets: [
      "Designed OCR and computer-vision steps for document understanding.",
      "Worked with NFC e-passport chip reading as part of identity verification.",
      "Tested multi-stage validation flows for consistency and reliability.",
    ],
  },
  {
    number: "04",
    title: "AI Health Super App",
    type: "Applied ML · Dashboard",
    description: "A Streamlit health diagnostics platform with secure login, prediction history, and three model pathways for diabetes, Parkinson’s disease, and pneumonia.",
    impact: "3 model pathways · reported ~88–92% accuracy",
    tags: ["XGBoost", "TensorFlow/Keras", "Librosa", "Streamlit"],
    image: "/projects/health-ai.svg",
    imageLabel: "ML / HEALTHCARE AI",
    repository: "https://github.com/didar-ali-deed/health-ai-super-app",
    demo: "https://health-ai-super-app-deed.streamlit.app",
    metrics: ["Diabetes · ~88%", "Parkinson’s · ~91%", "Pneumonia · ~92%"],
    bullets: [
      "Built three prediction pathways: XGBoost for diabetes, a Keras DNN for Parkinson’s, and a TensorFlow CNN for pneumonia X-rays.",
      "Added secure login and prediction-history tracking with SQLite-backed application flows.",
      "Connected model outputs to a routed Streamlit experience with custom styling and supporting privacy/contact pages.",
    ],
  },
  {
    number: "05",
    title: "BERT Sentiment Analysis",
    type: "NLP · Full-stack ML",
    description: "A fine-tuned language model served through a FastAPI backend with a React frontend for exploring sentiment predictions.",
    impact: "Model-to-interface NLP workflow",
    tags: ["BERT", "FastAPI", "React", "NLP"],
    image: "/projects/sentiment-ui.png",
    imageLabel: "NLP / PRODUCT UI",
    gallery: ["/projects/bert-class-distribution.png"],
    bullets: [
      "Fine-tuned BERT for sentiment analysis.",
      "Exposed inference through a FastAPI backend.",
      "Built a React frontend to make the prediction workflow accessible.",
    ],
  },
  {
    number: "06",
    title: "Multi-Source Job Data Scraper",
    type: "Data Engineering · Automation",
    description: "A Python and Playwright collection pipeline that brings job listings together and keeps the final dataset clean and useful.",
    impact: "Automated collection with dedup logic",
    tags: ["Python", "Playwright", "Data Pipelines", "Deduplication"],
    bullets: [
      "Built a Python/Playwright pipeline for collecting job data from multiple sources.",
      "Added deduplication logic to reduce repeated listings.",
      "Structured scraped records into a more consistent dataset for analysis.",
    ],
  },
];

export const skillGroups = [
  { label: "Languages", icon: "code", items: ["Python", "SQL", "C++", "C", "Bash"] },
  { label: "ML / AI", icon: "brain", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "NLP", "RAG", "Computer Vision", "OCR"] },
  { label: "Data", icon: "chart", items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn"] },
  { label: "Tools", icon: "tool", items: ["Docker", "FastAPI", "Git", "Linux", "Streamlit"] },
];

export const education = {
  degree: "B.Sc. Computer Systems Engineering",
  school: "UET Peshawar",
  period: "2021 – 2025",
  result: "CGPA 3.01 / 4.00",
};

export const certifications = [
  "Google Data Analytics Professional Certificate",
  "Google Cybersecurity Professional Certificate",
];

export const publication = {
  title: "Vocal Sentiments: Transformer-Based Speech Emotion Recognition",
  publisher: "VFAST Transactions on Software Engineering",
  year: "2025",
  description: "Published research on using transformer-based speech representations to identify emotional signals in voice.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
