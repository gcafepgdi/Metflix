import React, { Component } from 'react'

class Header extends Component {
    state = {
        query: ''
    }
    handleChange = e => {
        this.setState({
            query: e.target.value
        });
    }

    /* // When the form is submitted
     handleSubmit = e => {
         e.preventDefault();
         this.props.handleSearch(this.state.query);
         console.log(`Search item is ${this.state.query}`);
         console.log(`Props of handle submit is ${this.props}`);
         e.currentTarget.reset();
         this.props.history.push(`/search`);
     }*/
    render() {
        return (
            <div className="app_header">
                <div className="App-logo">
                    <a className="App-header-title" href="/">
                        <svg className="tmdb-logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.34 253.81"><defs></defs><title>Powered By TMDb</title><path fill="#FFF" d="M221.85 239.25c14.6 0 24.48-9.88 24.48-24.48V24.49c0-14.6-9.88-24.48-24.48-24.48H24.48C9.88.01 0 9.89 0 24.49v229.33l12.56-14.56V24.49a11.94 11.94 0 0 1 11.92-11.92h197.37a11.94 11.94 0 0 1 11.92 11.92v190.28a11.94 11.94 0 0 1-11.92 11.92H43.12l-12.56 12.56-.08-.1"></path><path fill="#FFF" d="M61.38 108.29h6.94V80.52h8.64v-6.89H52.74v6.89h8.64v27.77zM99.53 108.29h6.94V73.58h-6.94v13.88H89.14V73.58H82.2v34.71h6.94V94.4h10.39v13.89zM132.25 101.34h-13.02V94.4h11.12v-6.94h-11.12v-6.94h12.43v-6.94h-19.38v34.71h19.97v-6.95zM68.66 132.35l-13.69-15.24h-2.23v35.24h7.04v-19.36l8.88 9.31 8.88-9.31-.04 19.36h7.03v-35.24h-2.18l-13.69 15.24z"></path><path fill="#FFF" d="M108.04 117.07c-23.88 0-23.88 35.77 0 35.77s23.88-35.77 0-35.77zm0 28.59c-13.88 0-13.88-21.45 0-21.45s13.88 21.45 0 21.45zM165.37 117.65h6.94v34.7h-6.94zM185.07 145.41v-6.94h11.12v-6.94h-11.12v-6.94h12.43v-6.94h-19.37v34.7h19.96v-6.94h-13.02zM63.04 161.72h-10.3v34.7h10.3c23.14 0 23.14-34.7 0-34.7zm0 27.76h-3.4v-20.82h3.4c13.53 0 13.53 20.82 0 20.82z"></path><path fill="#FFF" d="M106.29 179.04c2.18-1.5 3.11-4.22 3.2-6.84.15-6.12-3.69-10.53-9.85-10.53H85.9v34.75h13.74a10.32 10.32 0 0 0 10.24-10.44 8.43 8.43 0 0 0-3.59-6.94zm-13.4-10.44h6.15a3.51 3.51 0 0 1 0 7h-6.17v-7zm6.17 20.87h-6.17v-6.94h6.15a3.41 3.41 0 0 1 3.49 3.45 3.45 3.45 0 0 1-3.49 3.5zM144.01 136.38l-9.14-18.73h-8.01l16.37 35.43h1.56l16.36-35.43h-8.01l-9.13 18.73zM52.44 58.19v-15h5.9c5.84 0 5.82 9.26 0 9.26h-2.9v5.73h-3zm5.65-8.65c2 0 2-3.36 0-3.36h-2.65v3.36h2.6zM74.21 42.91c10.33 0 10.33 15.47 0 15.47s-10.33-15.47 0-15.47zm0 3.09c-6 0-6 9.28 0 9.28s6.01-9.27 0-9.27zM91.26 58.51l-6.15-15.33h3.38l3 7.66 2.94-7.52h.15l2.94 7.52 3-7.66h3.38l-6.13 15.26h-.55l-2.75-6.66-2.73 6.72h-.53zM107.67 58.19v-15h7.52v3h-4.51v3h3.95v3h-3.95v3h4.77v3h-7.77zM127.62 58.19l-3-5.73h-1.45v5.73h-3v-15h5.87c5.35 0 5.88 7.54 1.47 8.82L131 58.2h-3.4zm-4.47-8.65h2.64c2 0 2-3.36 0-3.36h-2.64v3.36zM134.9 58.19v-15h7.52v3h-4.51v3h3.95v3h-3.95v3h4.77v3h-7.77zM151.85 58.19h-4.47v-15h4.47c9.99-.01 9.99 15 0 15zm-1.47-12v9h1.47c5.84 0 5.84-9 0-9h-1.47zM190.04 51.43l-5.23-8.25h3.65l3.07 5.16 3.07-5.16h3.67l-5.25 8.25v6.76h-3v-6.76zM180.72 50.67a3.68 3.68 0 0 0 1.39-3 4.13 4.13 0 0 0-4.26-4.56h-5.94v15h5.94a4.46 4.46 0 0 0 4.43-4.51 3.65 3.65 0 0 0-1.56-2.93zm-5.79-4.51h2.67a1.52 1.52 0 0 1 0 3h-2.67v-3zm2.67 9h-2.67v-3h2.67a1.47 1.47 0 0 1 1.51 1.49 1.49 1.49 0 0 1-1.51 1.54z"></path></svg>
                    </a>
                </div>
                <div className="SearchBar-wrapper">
                    { /*  <form onSubmit={this.handleSubmit}>
                        <input type="text" className="search-movie-input" placeholder="Search movies..." name="search" onChange={this.handleChange} />
                        <svg className="search-movie-input-icon" viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
                            <title>search</title>
                            <path d="M25.64 24.562l-6.42-6.675c1.65-1.962 2.555-4.43 2.555-7C21.775 4.885 16.89 0 10.888 0 4.884 0 0 4.884 0 10.888c0 6.003 4.884 10.887 10.888 10.887 2.253 0 4.4-.68 6.237-1.97l6.467 6.725c.27.28.634.436 1.023.436.37 0 .72-.14.984-.396.564-.543.582-1.444.04-2.008zM10.887 2.84c4.437 0 8.047 3.61 8.047 8.048 0 4.437-3.61 8.047-8.047 8.047-4.438 0-8.048-3.61-8.048-8.047 0-4.438 3.61-8.048 8.048-8.048z"></path>
                        </svg>
                    </form>*/}
                </div>
            </div>
        )
    }
}
export default Header;