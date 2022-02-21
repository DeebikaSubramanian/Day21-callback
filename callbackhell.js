
var declr_i=function (j)
{
   j();
};
declr_i(
    declr_i=function () 
   {
      print_i(10)
   });
function print_i(i)
{
    if(i>0)
   {
      setTimeout(()=>{
      document.getElementById("p1").innerHTML=i
      i--
      print_i(i)
      },2000);
   }
   if(i==0)
   setTimeout(()=>{
      document.getElementById("p1").innerHTML="Happy Independence Day"
   },2000);
   
}




