        function change(){
            var password = document.getElementById("pass_input");
            var show = document.getElementById("show");
            if(password.type === "password"){
                password.type = "text";
                show.className = "bi bi-eye-slash-fill";
            }
            else{
                password.type = "password"
                show.className = "bi bi-eye-fill";
            }
        }