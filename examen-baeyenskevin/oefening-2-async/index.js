
// https://restcountries.eu/rest/v2/all

class Country {
    constructor(data){
        this.data = data;
    }
    get htmlString() {
        return `
        <article>
        <label>
          <h3>${this.data.name}</h3>
          <div class="flagWrapper">
          <img src="${this.data.flag}" alt = "${this.data.name}">
          </div>
          <input type="checkbox"/>
          Already visited
        </label>
      </article>
        `
    }
    bindEvents(){
        document.getElementById(`checkbox${this.data.id}`).addEventListener('click', this.counterup.bind(this));
        }
    }
    
    class countries{
        constructor(name,flag,region) {
            this.name = name;
            this.flag = flag;
            this.region = region;
            this.renderInThisElement = document.getElementById('results');
            this.getData();
    }
    renderResults(content){
        this.renderInThisElement.innerHTML = content;
    }
    async getData(){
        this.renderResults('fetching country data...');
        const response = await fetch(`https://restcountries.eu/rest/v2/all`);
        this.data = await response.json();
        this.render();
    }
    render() {
        if (this.data.length === 0){
            this.renderResults("error fechting country data...");
        }
        else {
            let htmlString = '';
            const countrylist = new Country(this.data);
            htmlString += countrylist;
            return Country;
        }
        this.renderResults(htmlString);
        countrylist.forEach(country => {country.bindEvents();
        })

        function checkbox() {
            var $checkboxes = $('#results td input[type="checkbox"]');
        
        
            $checkboxes.change(function(){
                var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
                $('#total').text(countCheckedCheckboxes);
            });
        }
        }
    }
    
    
