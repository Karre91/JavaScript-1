// 7
inputfield = document.getElementById("leaveDate");
          var date = new Date();
         
          datestring =
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate() +
            "T" +
          inputfield.setAttribute("min", datestring);