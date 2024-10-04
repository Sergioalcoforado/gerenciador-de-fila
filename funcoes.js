        // Feito por Sérgio Alcoforado

        var passe = [];
        var maca = [];
        var mentor = [];
        let senhaCliente;
        
        //Função para contar os clickes        
        clicksMaca = 0;
        function clickMaca(){
            clicksMaca += 1; 
        }

        clicksMentor = 0;
        function clickMentor(){
            clicksMentor += 1; 
        }
        
        clicksPasse = 0;
        function clickPasse(){
            clicksPasse += 1; 
        }

        function senhaClientes() {
            document.getElementById("senha-clientes").innerHTML = senhaCliente;
        }

        //Funções para adicionar uma senha aos Arrays 
        function addMaca(){
            clickMaca()                             // Chama a função click
            senhaCliente = "Maca - "+clicksMaca;    // Adiciona o tipo da senha + o Click numa variavel
            maca.push("Maca - "+clicksMaca);        // Adiciona o tipo da senha + o click no Array
            senhaClientes();                        // Exibe a senha do Cliente no painel
        }

        function addMentor(){
            clickMentor()
            senhaCliente = "Mentor - "+clicksMentor;
            mentor.push("Mentor - "+clicksMentor);
            senhaClientes();
        }

        function addPasse(){
            clickPasse()
            senhaCliente = "Passe - "+clicksPasse;
            passe.push("Passe - "+clicksPasse);
            senhaClientes();
        }
         //Fim das funções


         
        //Função para chamar as senhas de Conversa Fraterna, com verificação.   
        function chamarMentor(){
            if(mentor.length > 0){
                document.getElementById("visor-tela").innerHTML = mentor[0]; 
                mentor.shift();
                document.getElementById("numero-caixa").innerHTML = event.target.id;
            }else{
                chamarPasse()
            }
        }    
        
        //Função para chamar as senhas Prioritarias, com verificação.        
        function chamarPasse(){            
            if(passe.length > 0){
                document.getElementById("visor-tela").innerHTML = passe[0]; 
                passe.shift();
                document.getElementById("numero-caixa").innerHTML = event.target.id;  
            }else if(mentor.length > 0){
                chamarMentor();
            }else if (maca.length > 0){
                chamarMaca();
            }else{
                document.getElementById("visor-tela").innerHTML = "Fim das Senhas";
            }
        }

        //Função para chamar as senhas de Maca, com verificação.  
        function chamarMaca(){  
            if(maca.length > 0){
                document.getElementById("visor-tela").innerHTML = maca[0]; 
                maca.shift();
                document.getElementById("numero-caixa").innerHTML = event.target.id;
            }else{
                chamarPasse()
            } 
        }
        //Fim das funções

        // Pega todos os botoes que existem com a class botoes
        const checkButtons = document.querySelectorAll(".botoes")

        checkButtons.forEach( button => {
            //adicionar a escuta
            button.addEventListener("click" , handleClick)
        })        

        //Quando o botao for clickado, registra o evento e entra no IF          
        function handleClick(event){
            // console.log(event)
            event.preventDefault()
            if(event.target.id == "btn-maca" ){
                addMaca()
            }else if(event.target.id == "btn-mentor"){
                addMentor()
            }else if(event.target.id == "btn-passe"){
                addPasse()
            }else if(event.target.id == "Maca"){
                chamarMaca()
            }else if(event.target.id == "Mentor"){
                chamarMentor();
            }else if(event.target.id == "Passe"){
                chamarPasse()            
            }else if(event.target.id == "Passe"){
                chamarPasse()
            }
        }        
 