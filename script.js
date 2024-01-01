//1.Create your own resume data in JSON format.

const myResume = {
  personalInfo: {
    name: "Harikaran",
    email: "harikaran7242@gmail.com",
    phone: "8883661047",
    degree: "B.E",
    location: {
      address: "332/4 sivakami puram colony ,neduvayal",
      postalCode: "627803",
      District: "Tenkasi",
      state: "Tamilnadu",
      country: "India",
    },
  },
  profiles: [
    {
      github: "https://github.com/HarikaranSubramanian",
    },
  ],

  work: [
    {
      company: "Amazon",
      position: "Quality Specialist",
      startDate: "2022-08-15",
      endDate: "2023-01-1",
      summary:
        "Analyze basic case level inputs and identify predictors causes of business related problems and improve delivery  customer experience by case level corrections",
    },
  ],
  education: [
    {
      institution: "VV College of Engineering",
      department: "ECE",
      "start year": 2018,
      "end year": 2022,
      cgpa: 7.4,
    },
  ],
  skills: ["JavaScript", "HTML", "CSS", "Git"],
  languages: [
    {
      language: "Tamil,Enlish",
    },
  ],
};
console.log(myResume);

// 2.Iterating using for loop

console.log("Iterating using for loop:");
for (let section in myResume) {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    for (let item of myResume[section]) {
      console.log(item);
    }
  } else {
    console.log(myResume[section]);
  }
}

// Iterating using for...in loop
console.log("Iterating using for...in loop:");
for (let section in myResume) {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    for (let index in myResume[section]) {
      console.log(myResume[section][index]);
    }
  } else {
    console.log(myResume[section]);
  }
}

// Iterating using for...of loop
console.log("Iterating using for...of loop:");
for (let section of Object.keys(myResume)) {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    for (let item of myResume[section]) {
      console.log(item);
    }
  } else {
    console.log(myResume[section]);
  }
}

// Iterating using forEach method for arrays
console.log("Iterating using forEach method:");
Object.keys(myResume).forEach((section) => {
  console.log(section);
  if (Array.isArray(myResume[section])) {
    myResume[section].forEach((item) => console.log(item));
  } else {
    console.log(myResume[section]);
  }
});
