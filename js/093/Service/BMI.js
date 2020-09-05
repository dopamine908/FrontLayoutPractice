export class BMI {
    weight;
    height;
    bmi_value;
    bmi_level;
    time;

    constructor(height, weight) {
        this.setWeight(weight);
        this.setHeight(height);
        this.setBMI();
        this.setBMILevel();
        this.setTime();
    }

    setBMI() {
        this.bmi_value = this.calculateBMI(this.height, this.weight);
    }

    calculateBMI() {
        return (this.weight / (Math.pow((this.height / 100), 2))).toFixed(2);
    }

    setBMILevel() {
        if (this.bmi_value <= 18.5) {
            this.bmi_level = 'too_light';
        } else if (this.bmi_value > 18.5 && this.bmi_value <= 25) {
            this.bmi_level = 'ok';
        } else if (this.bmi_value > 25 && this.bmi_value <= 30) {
            this.bmi_level = 'level_1';
        } else if (this.bmi_value > 30 && this.bmi_value <= 35) {
            this.bmi_level = 'level_2';
        } else if (this.bmi_value > 35 && this.bmi_value <= 40) {
            this.bmi_level = 'level_3';
        } else if (this.bmi_value > 40) {
            this.bmi_level = 'level_4';
        }
    }

    setHeight(height) {
        this.height = height;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setTime() {
        this.time = this.getFormatDateTime(new Date());
    }

    getFormatDateTime(Date) {
        let date = ("0" + Date.getDate()).slice(-2);
        let month = ("0" + (Date.getMonth() + 1)).slice(-2);
        let year = Date.getFullYear();
        return date + "-" + month + "-" + year;
    }
}
