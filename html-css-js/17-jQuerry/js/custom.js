// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){

        $('.owl-carousel').owlCarousel();
    
        let titulos = $('h4') // tag
       
        let itens = $('.featured-item') // class
        
        let destaques = $('#featured') // id
    
        console.log(titulos.first());
    
       
        // Destaque escrito Novo ao lado do produto
        $('.featured-item a').addClass('btn btn-dark stretch-link');
        $('.featured-item:first h4').append('<span class="badge bg-secondary" style="font-size:10px;">Novo</span>')
        // fim


        /* 
        $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

        })
        */


        // Abrir o modal de contato e sobre
        $('.nav-modal-open').on('click', function(e){
        e.preventDefault();
        let elem = $(this).attr('rel')
        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())
        let myModal = new bootstrap.Modal($('#modelId'))
        myModal.show()
        })
        //fim


        // Validação de campos
        function validate( elem ){
        if(elem.val() == '') {
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')
            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
        }
    
        $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')

        validate(inputName)
        validate(inputEmail)
        
        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            return false
        } else {
            $(this).submit()
        }
        })

        $('body').on('blur', '#nome', function(){
        validate($(this));
        })

        $('body').on('blur', '#email', function(){
        validate($(this));
        })

        $('body').on('blur', '#phone', function(){
        validate($(this))
        $(this).mask('(00) 00000-0000');
        })
        //fim



    
    
    
    
    
    
    
    })