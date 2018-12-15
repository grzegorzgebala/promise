App = React.createClass({
    handleSearch: function(searchingText) {  // 1.
            this.setState({
              loading: true  // 2.
            });
            this.getGif(searchingText, function(gif) {  // 3.
              this.setState({  // 4
                loading: false,  // a
                gif: gif,  // b
                searchingText: searchingText  // c
              });
            }.bind(this));
        },

       

        getInitialState() {
          return {
            loading: false,
            searchingText: '',
            gif: {}
          }
        },

    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
            <Gif
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl} 
            />
          </div>
        );
    }
});