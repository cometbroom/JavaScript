/**
 * Credit to https://adventofcode.com/ for this exercise
 *
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 *
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 *
 * We expect the output:
 *
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
    { times: "1-3", letter: "a", password: "abcde" },
    { times: "1-3", letter: "b", password: "cdefg" },
    { times: "2-9", letter: "c", password: "ccccccccc" },
];
let results = [];

const times = passwordList.map((item) => item.times.split("-"));

passwordList.forEach((item, index) => {
    let occurences = 0;
    let stringAcc = "";

    for (let i = 0; i < item.password.length; ++i) {
        if (item.password[i] === item.letter) occurences++;
    }
    if (occurences >= times[index][0] && occurences <= times[index][1]) {
        stringAcc = `${item.password} is VALID`;
    } else {
        stringAcc = `${item.password} is INVALID`;
    }
    stringAcc += `, ${item.letter} is present ${occurences} times and should be at least ${times[index][0]} and at most ${times[index][1]}`;
    results.push(stringAcc);
});

console.log(results);
