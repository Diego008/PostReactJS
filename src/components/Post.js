import React from 'react';
import Comment from './Comment';
import './components.css';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                { text: '', email: '', data: '' }
            ],
            // newData: new Date().toLocaleString().substr(0, 10)
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.removePost = this.removePost.bind(this);
    }

    //evento formulário que é disparado ao clicar no botão POST
    handleSubmit(e) {
        e.preventDefault();

        //declarando constates para receber os valores do formulário
        const email = this.inputEmail.value;
        const post = this.inputValue.value;
        const data = new Date().toLocaleString();              

        //populando state
        if (email.trim() !== '' && post.trim() !== '') {
            this.setState({
                comments: [
                    ...this.state.comments,
                    {
                        text: post,
                        email: email,
                        data: data
                    }
                ]
            });
        } else {
            alert('Preencha todos os campos');
        }
        // this.setState({ newData: '' });
        this.inputValue.value = '';
        this.inputEmail.value = '';
    }

    //Evento disparado ao clicar para excluir POST
    removePost({currentTarget}) {               
        var array = [...this.state.comments]; // declarando array para receber toda state       
        var index = currentTarget.id;        //declarando variável para receber id do botão de exclusão do post

        if (index !== 0) {
            array.splice(index, 1);
            this.setState({ comments: array }); // Recriando state com novo array
        }        
    }

    //exemplo de onchange INPUT para pegar o value
    // handleTextChange(e) {
    //     e.preventDefault();

    //     this.setState({ newComment: e.target.value })
    // }

    render() {
        //declarando constante para pegar tamanho do array para realizar a contagem
        const numPosts = this.state.comments.length - 1;
        let paragraph;
        //Validando se existe post ou não, caso false, retorna um paragrafo Sem Posts.
        if (numPosts === 0) {
            paragraph = <p>Sem Posts.</p>
        }

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group col-sm-4">
                                <label>Email</label>
                                <input type="email" className="form-control" id="txtEmail"
                                    placeholder="name@example.com" ref={el => this.inputEmail = el}
                                    onChange={this.handleEmailChange} value={undefined} />
                                <label>Digite Aqui</label>
                                <textarea ref={el => this.inputValue = el} className="form-control" rows="3" id="txtArea"
                                    onChange={this.handleTextChange} value={undefined}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Postar</button>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 marginP">
                        {
                            //mapeando array para trazer o conteúdo apenas quando tiver
                            this.state.comments.map((comment, index) => {
                                if (index !== 0) {
                                    return <Comment key={index} id={index} email={comment.email} text={comment.text} data={comment.data} remove={this.removePost} />
                                }
                                return null
                            })

                        }
                        {paragraph}
                        <h6>Número de Posts <span className="badge badge-secondary">{numPosts}</span></h6>
                    </div>
                </div>

            </div>
        )
    }
}