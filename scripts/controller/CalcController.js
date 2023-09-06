class CalcController {

    /* Método construtor da classe e atributos */
        constructor(){

            /* Attributes */
                this._locale = 'pt-BR';
                this._displayCalcEl = document.querySelector("#display");
                this._dateEl = document.querySelector("#data");
                this._timeEl = document.querySelector("#hora");
                this.currentDate;
                this.initialize();
                this.initButtonsEvents();
        }

    /* Methods */
        initialize(){
            /* DOM manipulate */

                this.setDisplayDateTime();
                setInterval(() => {
                    
                    this.setDisplayDateTime();

                }, 1000);
        }
        
        initButtonsEvents(){

            let buttons = document.querySelectorAll("#buttons > g, #parts > g");

            buttons.forEach((btn, index) => {
                btn.addEventListener('click', event => {

                    console.log(btn.className.baseVal.replace("btn-", ""));
                });
            }); 
        }
    
        setDisplayDateTime(){

            this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                day:"2-digit",
                month:"long",
                year:"numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        }

    /* Getters e Setters */

        /* Display TIME */
            get displayTime(){
                return this._timeEl.innerHTML;
            }

            set displayTime(value){
                this._timeEl.innerHTML = value;
            }

        /* Display DATE */
            get displayDate(){
                return this._dateEl.innerHTML;
            }

            set displayDate(value){
                this._dateEl.innerHTML = value;
            }

        /* Atributo displayCalc */
            get displayCalc(){

                return this._displayCalcEl.innerHTML;
            }

            set displayCalc(valor){

                this._displayCalcEl.innerHTML = valor;
            }

        /* Atributo currentDate */
            get currentDate(){
                return new Date();
            }

            set currentDate(data){

                this.currentDate = data;

                return this.currentDate;
            }
}