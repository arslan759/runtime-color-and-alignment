function changeColor(){
    let color = document.getElementById('color').value;

    if(color == 'red'){
        document.getElementById('heading').style.color='red'
    }

    if(color == 'blue'){
        document.getElementById('heading').style.color='blue'
    }

    if(color == 'green'){
        document.getElementById('heading').style.color='green'
    }

}

function changeAlign(){
    let align = document.getElementById('align').value;

    if(align == 'left'){
        document.getElementById('heading').style.textAlign= 'left';
    }

    if(align == 'right'){
        document.getElementById('heading').style.textAlign= 'right';
    }

    if(align == 'center'){
        document.getElementById('heading').style.textAlign= 'center';
    }

}