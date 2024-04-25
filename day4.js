const resume ={
    "name": "Deepak",
    "title": "Software Engineer",
    "contact": {
      "email": "deepakkumar281020@gmail.com",
      "phone": "7092184496",
      "address": "Madurai"
    },
    "summary": "Experienced software engineer with a passion for building scalable and efficient web applications and Mobile application.",
    "experience": [
      {
        "title": "React native developer",
        "company": "Techgenzi private limited",
        "location": "coimbatore",
        "dates": "June 2022 - Feb 2024",
        "responsibilities": [
          "Mobile  application development using React Native.",
        ]
      },
      {
        "title": "React native developer",
        "company": "osiz technologies",
        "location": "Madurai",
        "dates": "March 2024 - Present",
        "responsibilities": [
            "Mobile  application development using React Native."
        ]
      },
    ],
    "education": {
      "degree": "ECE",
      "institution": "SIT",
      "location": "Madurai",
      "dates": "2018 - 2022"
    }
  }
  // for loop
for (let i = 0; i < resume.experience.length; i++) {
  const job = resume.experience[i];
  console.log(`Name: ${resume.name}`);
  console.log(`Job Title: ${job.title}`);
  console.log(`Company: ${job.company}`);
  console.log(`Location: ${job.location}`);
  console.log(`Dates: ${job.dates}`);
  console.log(`Responsibilities:`);
  for (let j = 0; j < job.responsibilities.length; j++) {
    console.log(`- ${job.responsibilities[j]}`);
  }
}

//for in loop 

for (const key in resume.contact) {
    console.log(`${key}: ${resume.contact[key]}`);
  }

// for of loop

  for (const job of resume.experience) {
    console.log(`Job Title: ${job.title}`);
    console.log(`Company: ${job.company}`);
    console.log(`Location: ${job.location}`);
    console.log(`Dates: ${job.dates}`);
    console.log(`Responsibilities:`);
    for (const responsibility of job.responsibilities) {
      console.log(`- ${responsibility}`);
    }
  }