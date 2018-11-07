var data = {
    status: 0,
    students: [
        {
            id: 1001,
            name: {
                firstName: 'John',
                lastName: 'Smith',
                fullname: 'John Smith',
      },
            photo: '1001.jpg',
    },
        {
            id: 1002,
            name: {
                firstName: 'Mary',
                lastName: 'Jones',
                fullname: 'Mary Jones',
      },
            photo: '1002.png',
    },
        {
            id: 1003,
            name: {
                firstName: 'Steve',
                lastName: 'Williams',
                fullname: 'Steve Williams',
      },
            photo: '1003.png',
    },
  ],
};

// init
function init() {
    console.log('initializing page...');
    // create grid
    let gridStudents = new Grid('gridStudents', document.getElementById('content'));
    // add columns
    gridStudents.addColumn(new textColumn('Id', 'id', '15%'));
    gridStudents.addColumn(new ImageColumn('Photo', 'photo', '15%'));
    // <td class="grid image"><img src="photos/1001.jpg"/></td>
    
    // <td>1001</td>
    gridStudents.addColumn(new textColumn('First Name', 'name.firstName', '35%'));
    gridStudents.addColumn(new textColumn('Last Name', 'name.LastName', '35%'));
    // add data source
    gridStudents.setDataSource(data.students);
    // show edit button
    // showEditButton(functionName,argument)
    
  gridStudents.ShowEditButton('editStudent','id');
    // <td><button onClick="editStudent(1001);"><img src="images/edit.png"/><button>
    // show Delete Button
   gridStudents.ShowDeleteButton('deleteStudent','id');
    
    // show grid
    
    gridStudents.show();
}

