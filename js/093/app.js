import {BMI} from "./Service/BMI.js";
import {MainController as Controller} from "./Controller/MainController.js";
// console.log(new BMI(171, 7));
// console.log(new BMI(171, 70));
// console.log(new BMI(171, 80));
// console.log(new BMI(171, 90));
// console.log(new BMI(171, 110));
// console.log(new BMI(171, 120));
const MainController = new Controller();
MainController.initialPage();

document.querySelector('#submit_form').addEventListener('click', function (event) {
    event.preventDefault();
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let bmi = new BMI(height, weight);
    MainController.addBMI(bmi);
    MainController.renderResultPanel();
});
