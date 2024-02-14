        function replaceImg() {
            if (txt1.value == "Mar" || txt1.value == "mar") {

                for(i = 0; i < elements.length; i++){
                    elements[i].classList.toggle("fade-in");
                }
                
                label.style.display = 'none';
                txt1.style.display = 'none';
                btn.style.display = 'none';
                mymessage.style.display = 'block';
                mymessage.innerHTML = message;
                
            }
            else if (txt1.value != "Mar" || txt1.value != "mar"){
                mymessage.style.display = 'block';
                mymessage.innerHTML = "Hey! you are either not my valentine or you are a silly goose who typed their name wrong!";
            }
            else{
                mymessage.style.display = 'none';
            }
        }
