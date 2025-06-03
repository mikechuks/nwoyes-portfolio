// Simulate menu links
import headImg from "../assets/HImage-1718927757771.jpg"
import expIfi from "../assets/comImg-1718930451388.png"
import expXper from "../assets/comImg-1719700257920.png"
import expDigital from "../assets/comImg-1719700523795.png"

export const fetchMenuLinks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Home", "About Me", "Contact"]);
      }, 1000);
    });
  };
  
  // Simulate header data
  export const fetchHeaderData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Hey!, I'm Nwoye Michael Chukwudi",
          subtitle: "A softwear developer",
          buttons: [
            { label: "Hire me", type: "primary" },
            { label: "Download CV", type: "secondary" }
          ],
          image: headImg
        });
      }, 1000);
    });
  };
  
  export const fetchExperienceData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Experience",
          highlight: "",
          experiences: [
            {
              description: `Provided guidance on HTML, CSS, JavaScript, 
              and other relevant web technologies. Assisted students in 
              troubleshooting coding issues and debugging their web projects.
               Facilitated discussions and interactive activities to reinforce 
               theoretical concepts and practical skills. Collaborated with
                students to develop and enhance their problem-solving and critical 
                thinking abilities in the context of web development. 
                Offered guidance on best practices, coding conventions, 
                and efficient development workflows.,`,
              image: expIfi
            },
            {
              description: `Monitored, created, and populated 100+ 
              QA sheets with designer and project manager. 
              Engaged in 100+ hours of Codigniter training and 
              PHP crash course with lead designer. Collaborated 
              with designers and performance team on designing 
              updates to sites and blogs, improving user experience 
              by 41%. Briefed development team on website research, 
              and made suggestions for website builds/products. This 
              saved the development team 400+ hours. Participated in 
              stand-ups 2 times a month. Team leaders would review, 
              assign, and coach team members.`,
              image: expXper
            },
            {
              description: `Monitored, created, and populated 
              100+ QA sheets with designer and project manager. 
              Engaged in 100+ hours of Codigniter training and 
              PHP crash course with lead designer. Collaborated 
              with designers and performance team on designing 
              updates to sites and blogs, improving user experience 
              by 41%. Briefed development team on website research, 
              and made suggestions for website builds/products. 
              This saved the development team 400+ hours. Participated 
              in stand-ups 2 times a month. Team leaders would review, 
              assign, and coach team members.`,
              image: expDigital
            }
          ]
        });
      }, 1000);
    });
  };
  
  

  // --- Projects & Categories ---
export const fetchProjectCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["All", "UI", "UX", "Web Design"]);
    }, 500);
  });
};

export const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "UI/UX Design",
          category: "UI",
          image: "/project-1.png",
        },
        {
          id: 2,
          title: "Web Design",
          category: "Web Design",
          image: "/project-2.png",
        },
        {
          id: 3,
          title: "Mobile App",
          category: "UX",
          image: "/project-3.png",
        },
      ]);
    }, 500);
  });
};
