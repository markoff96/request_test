// let courseName = 'Web development';
// let coursePrice = 39 ;
// let mainGoals = [
//     'Learn web',
//     'become a dev',
//     'Just for fun'
// ];

// alert(courseName);
// alert(coursePrice);
// alert(mainGoals);
let onlineCourse = {
  name: "Online course",
  price: 39,
  goals: ["Learn web", "become a dev", "Just for fun"]
};

alert(onlineCourse.name);
alert(onlineCourse.price);

function  accessListItem(array , arrayIndex) {
    arrrayElement = array[arrayIndex];
    return arrrayElement;
     
}

let firstGoal = accessListItem(onlineCourse.goals, 0);
alert(firstGoal);