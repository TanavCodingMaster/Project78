var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93SLtuS6buMWNCAhdEWolL7tLrja96O2-E32skhMtqdPhAHdl_RIpeFOEM7kXyHY8uW4&usqp=CAU" , "https://cdn5.vectorstock.com/i/1000x1000/84/74/cartoon-happy-mother-hugging-her-daughter-vector-24838474.jpg", "https://image.shutterstock.com/image-illustration/cute-style-young-mother-posing-260nw-561868150.jpg", "https://www.kidsfront.com/coloring-pages/sm_color/uncle.gif" ];
var names = ["My Family has 6 Members including me-","Shri Gopal Mittal", "Punesh Mittal", "Sarika Mittal", "Meenu Mittal", "Rohit Mittal",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0; 
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
