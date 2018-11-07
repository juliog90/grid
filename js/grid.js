//textcolumn class
function textColumn(headerText,dataField,width){
    if(typeof headerText !== 'undefined') this.headerText=headerText;
    if(typeof dataField !== 'undefined') this.dataField=dataField;
    if(typeof width !== 'undefined') this.width=width;
}
function ImageColumn(headerText,dataField){
    if(typeof headerText !== 'undefined') this.headerText=headerText;
    if(typeof dataField !== 'undefined') this.dataField=dataField;
    if(typeof width !== 'undefined') this.width=width;
}

//grid class
function Grid(id,parentDiv){
    if(typeof id !=='undefined')this.id=id;
    if(typeof parentDiv !=='undefined')this.parentDiv=parentDiv;
    this.columns = [];
    this.dataSource = null;

    //add column
    Grid.prototype.addColumn = function(column){
        this.columns[this.columns.length] = column;
    }
    Grid.prototype.ShowEditButton = function(column){
        this.columns[this.columns.length]=column;
    }
    Grid.prototype.ShowDeleteButton = function(column){
        this.columns[this.columns.length]=column;
    }



    //set data source
    Grid.prototype.setDataSource = function(dataSource){
        if(typeof dataSource !== 'undefined') this.dataSource=dataSource
    }
    //show table
    Grid.prototype.show = function(){
        console.log(this.columns);
        //add table
        var table = document.createElement('table');
        table.className='grid';
        table.id=this.id;
        //table header
        var tableHeader = document.createElement('thead');
        tableHeader.id = this.id +'header';
        table.appendChild(tableHeader);
        //tablebody
        var tableBody = document.createElement('tbody');
        tableBody.id = this.id +'body';
        table.appendChild(tableBody);
        //add table to
        parentDiv.appendChild(table);
        //column header
        for(var i = 0; i < this.columns.length;i++){
            var th = document.createElement('th');
            th.innerHTML = this.columns[i].headerText;
            th.setAttribute('width', this.columns[i].width);
            tableHeader.appendChild(th);
        }
        //show data rows
        console.log(this.dataSource);
        for(var i = 0; i < this.dataSource.length;i++){
            //create row
            var row = document.createElement('tr');
            //cells
            for(var c = 0; c < this.columns.length;c++){
                //create cell
                var cell = document.createElement('td');
                var dataField = this.columns[c].dataField.split('.');
                var dataSource= this.dataSource[i];
                for(var j=0;j<dataField.length;j++){
                    dataSource=dataSource[dataField[j]];
                }
                if(this.columns[c] instanceof ImageColumn){
                    var image = document.createElement('img');
                    image.src='images/' + dataSource;
                    image.className ='imgtable';
                    cell.appendChild(image);
                }else{
                cell.innerHTML=dataSource;
                }
                row.appendChild(cell);
            }
            //add row to parent 
            tableBody.appendChild(row);
        }
        
    }
}
