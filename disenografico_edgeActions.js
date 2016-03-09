/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1e3}", "click", function(sym, e) {
         
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(10250);
         setTimeout(function(){
            $("#modal2").css("display","block");
            $("#modal2").load("carousele3.html");
         },1000);
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1eco2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(11510);
         setTimeout(function(){
            $("#modal2").css("display","block");
            $("#modal2").load("carouseleco104.html");
         },800);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12509, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1gaia}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(12600);
         setTimeout(function(){
            $("#modal2").css("display","block");
            $("#modal2").load("carouselgaia104.html");
         },1000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'b1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${circuloe3}", "click", function(sym, e) {
         
         

      });
         //Edge binding end

   })("b1");
   //Edge symbol end:'b1'

   //=========================================================
   
   //Edge symbol: 'nubescielo'
   (function(symbolName) {   
   
   })("nubescielo");
   //Edge symbol end:'nubescielo'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

      

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6816775");