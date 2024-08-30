export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 7,
      title: "Do you want to Download my Resume?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1  text-center",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "AI Saas Blog",
      des: "AI SaaS Blog is a platform dedicated to sharing insights, trends, and innovations in the world of artificial intelligence as a service.",
      img: "/project1.png",
      iconLists: ["/nextjs.png", "/tailwind.png", "/mongodb.png", "/auth0.png","/chatgpt.png"],
      link: "https://ai-bloggy.vercel.app/",
    },
    {
      id: 2,
      title: "Curiosense Ecommerce",
      des: "CurioSense is an eCommerce platform that specializes in unique and educational products for kids, offering a range of toys, books.",
      img: "/project2.png",
      iconLists: ["/nextjs.png", "/tailwind.png", "/mongodb.png"],
      link: "https://curiousenseltd.vercel.app/",
    },
    {
      id: 3,
      title: "Ease Expense Personal Money Budget",
      des: "Ease Expense is a personal budgeting tool designed to simplify money management by tracking income and expenses.",
      img: "/project3.png",
      iconLists: ["/python.png", "/bootstrap.png", "/mysql.png"],
      link: "https://github.com/Anish202020/easeexpense3.0",
    },
    {
      id: 4,
      title: "LookUp Search Engine",
      des: "Lookup search engine that allows users to search for specific information quickly by entering keywords or phrases.",
      img: "/project4.png",
      iconLists: ["/nextjs.png", "/tailwind.png"],
      link: "https://github.com/Anish202020/google-next",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Anish is an outstanding full-stack developer with a rare combination of technical expertise and creative problem-solving skills. His ability to deliver high-quality code on time.",
      name: "Ansh Jha",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "Working with Anish has been a game-changer for our development team. He not only brings deep knowledge of both front-end and back-end technologies.",
      name: "Aditya Kshatriya",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "Anish full-stack development skills are simply unparalleled. From designing intuitive user interfaces to building robust server-side applications.",
      name: "Aditya Ranjan",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "What sets Anish apart as a full-stack developer is his attention to detail and passion for innovation. He is always up-to-date with the latest technologies.",
      name: "Abhishek J",
      title: "Student of Acharya Institute of Technology",
    },
    {
      quote:
        "Anish is a versatile full-stack developer who excels in both technical acumen and team collaboration. His ability to understand complex requirements.",
      name: "Balaji A T",
      title: "Student of Acharya Institute of Technology",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Next Js",
      img: "/nextjs.png",
      nameImg: "/NextJsName.png",
    },
    {
      id: 2,
      name: "MongoDB",
      img: "/mongodb.png",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "ChatGPT",
      img: "/chatgpt.png",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "Python",
      img: "/python.png",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "MySql",
      img: "/mysql.png",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];