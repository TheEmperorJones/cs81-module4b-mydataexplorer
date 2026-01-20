// https://github.com/TheEmperorJones/cs81-module4b-mydataexplorer

// Establish the array of objects, themselves each an array
const weekData = [
    { day: "Monday", sleepHours: 9, screenTime: 8, mood: "resigned", caffeineIntake: 5, focusLevel: 5},
    { day: "Tuesday", sleepHours: 7.5, screenTime: 7, mood: "alert", caffeineIntake: 2, focusLevel: 7},
    { day: "Wednesday", sleepHours: 8, screenTime: 6, mood: "positive", caffeineIntake: 2, focusLevel: 7},
    { day: "Thursday", sleepHours: 8.5, screenTime: 8, mood: "positive", caffeineIntake: 2, focusLevel: 8},
    { day: "Friday", sleepHours: 7, screenTime: 8, mood: "positive", caffeineIntake: 2, focusLevel: 8},
    { day: "Saturday", sleepHours: 10, screenTime: 8.5, mood: "relaxed", caffeineIntake: 4, focusLevel: 9},
    { day: "Sunday", sleepHours: 7.5, screenTime: 9, mood: "relaxed", caffeineIntake: 6, focusLevel: 10}
];
// Return the highest screen time of the week
function mostScreenTime(log) {
  let maxScreen = 0; 

  for (let entry of log) {
    if (entry.screenTime > maxScreen) {
      maxScreen = entry.screenTime;
    }
  }
  
  return maxScreen;
}

// Return the total sleep hours for the week and the average sleep hours per day
let weekDays = weekData.length;

function totalSleepHours(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.sleepHours;
  }
  return total;
}

// Analyze the most frequent mood of the week
function mostFrequentMood(log) {
  const moodCounts = {};
  for (let entry of log) {
    if (!moodCounts[entry.mood]) {
      moodCounts[entry.mood] = 1;
    } else {
      moodCounts[entry.mood]++;
    }
  }

  let maxMood = null;
  let maxMoodCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > maxMoodCount) {
        maxMood = mood;
        maxMoodCount = moodCounts[mood];
    }
  }

  return maxMood;
}

// Return the lowest value for focus level of the week
function getMinFocus(log) {
  return Math.min(...log.map(entry => entry.focusLevel));
}

// Consolidated logs to conform to sample output a bit better
console.log("Highest screen time:", mostScreenTime(weekData) + " hours");
console.log("Total hours slept this week:", totalSleepHours(weekData));
console.log("Total sleep hours per day: ", (totalSleepHours(weekData) / weekDays));
console.log("The most common mood was:", mostFrequentMood(weekData));
console.log("Lowest focus level of the week:", getMinFocus(weekData));


/*

3. Predict Before Coding
Add comments in your code predicting:

Which day had the most screen time?
- I predict that Saturday will be the day with the highest screenTime at 10 hours.

Best focus day?
- I predict that Sunday will have the highest focusLevel rating at 10.

Is more caffeine helping?
- I predict that caffeineIntake will not correlate to a higher focusLevel
  at least in the sense of statistical rigor--they won't quite make that bar.
- I could not confirm this--my data did not correlate well.
  I should have used terms like "productive" and then checked to
  see if that correlated true/fase with caffeine above a certain level.


5. Reflect on Your Findings
Create a file called REFLECTION.md and answer:

Were your predictions right?
What surprised you?
What was tricky or rewarding?
How did using your own data change things?


Submit to Canvas
Upload myDataJournal.js file to Canvas
URL added to myDataJournal.js as a comment
Create a GitHub repo named cs81-modulel4b-mydataexplorer
Include myDataJournal.js and REFLECTION.md.
Make at least 4 commits with useful messages (e.g. "added sleep function").

*/