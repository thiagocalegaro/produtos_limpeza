document.getElementById("combo").addEventListener("change", function() {
      calc()
  })
  
  document.getElementById("qtd").addEventListener("input", function() {
      calc()
  })
  
  function calc() {
      var combo = document.getElementById("combo")
      var opcombo = parseFloat(combo.value)
      var qtd = parseInt(document.getElementById("qtd").value)
      var total = 0
  
      switch (opcombo) {
          case 0:
              total = 14.99
              break
          case 1:
              total = 4.99
              break
          case 2:
              total = 39.99
              break
          case 3:
              total = 7.99
              break
          case 4:
              total = 2.99
              break
          case 5:
              total = 17.99
              break
      }
  
      var valor_total = total * qtd
     
      document.getElementById("total").value = valor_total.toFixed(2).replace('.',',')

  }
  