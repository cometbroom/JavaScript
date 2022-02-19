const modules = [
    { name: "html-css", displayName: "HTML/CSS" },
    { name: "javascript", displayName: "JavaScript" },
    { name: "browsers", displayName: "Browsers" },
    { name: "using-apis", displayName: "Using APIs" },
    { name: "node", displayName: "Node.js" },
    { name: "databases", displayName: "Databases" },
    { name: "react", displayName: "React" },
    { name: "project", displayName: "Project" },
];

const classes = [
    {
        name: "class32",
        startDate: "23-3-2021",
        active: false,
        graduationDate: "7-11-2021",
    },
    {
        name: "class33",
        startDate: "28-5-2021",
        active: false,
        graduationDate: "7-11-2021",
    },
    {
        name: "class34",
        startDate: "2-9-2021",
        active: true,
        currentModule: "react",
    },
    {
        name: "class35",
        startDate: "14-11-2021",
        active: true,
        currentModule: "using-apis",
    },
    {
        name: "class36",
        startDate: "5-1-2022",
        active: true,
        currentModule: "javascript",
    },
];

const students = [
    { name: "Fede", class: "class33", gitHubName: "fedefu", graduated: false },
    {
        name: "Tjebbe",
        class: "class32",
        gitHubName: "Tjebbee",
        graduated: true,
    },
    { name: "Rob", class: "class34", gitHubName: "robvk", graduated: false },
    {
        name: "Wouter",
        class: "class35",
        gitHubName: "wouterkleijn",
        graduated: false,
    },
];

const mentors = [
    {
        name: "Stas",
        canTeach: ["javascript", "browsers", "using-apis"],
        nowTeaching: "javascript",
    },
    {
        name: "Andrej",
        canTeach: ["using-apis", "node"],
    },
    {
        name: "Shriyans",
        canTeach: ["react"],
        nowTeaching: "react",
    },
    {
        name: "Yash",
        canTeach: ["javascript", "using-apis"],
    },
    {
        name: "Rohan",
        canTeach: ["html/css/git", "javascript", "node"],
    },
    {
        name: "Collin",
        canTeach: ["browsers", "using-apis", "node"],
    },
];

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
    return mentors
        .filter((mentor) => mentor.canTeach.includes(moduleName))
        .map((x) => x.name);
};

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
    let possibleMentors = possibleMentorsForModule(moduleName);
    let randIndex = Math.floor(Math.random() * possibleMentors.length);

    return possibleMentors[randIndex];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
