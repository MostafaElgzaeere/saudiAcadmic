let x= document.getElementById("change_bac"),
    vd=document.getElementById("bac");
x.onclick=()=>{
    if (vd.src==`http://127.0.0.1:8000/static/rain.mp4`){
        vd.src=`http://127.0.0.1:8000/static/v3.mp4`    }
    else{
        vd.src="http://127.0.0.1:8000/static/rain.mp4"
    }

    console.log(vd.src);
}

// // src={% static 'rain.mp4' %}
