import {BMI} from "./Service/BMI.js";
import {MainController as Controller} from "./Controller/MainController.js";

const MainController = new Controller();
MainController.initialPage();

document.querySelector('#submit_form').addEventListener('click', function (event) {
    event.preventDefault();
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let bmi = new BMI(height, weight);
    MainController.addBMI(bmi);
    MainController.renderResultPanel();
    MainController.renderCalculateResult(bmi);
    addRestartEvent();
});


function addRestartEvent() {
    document.querySelector('.restart').addEventListener('click', function (event) {
        MainController.renderOriginalForm();
    });
}
