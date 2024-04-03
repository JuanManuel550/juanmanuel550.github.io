function check(strForm) {
  //Properties
  this.strForm = strForm;
  this.arrErrors = new Array();

  //Methods
  //document.write("asdasdasd");
  this.getInput = check_getInput;
  this.getNextPosition = check_getNextPosition;
  this.checkError = check_checkError;
  this.checkError2 = check_checkError2;
  this.checkFixedError = check_checkFixedError;
  this.isDate = check_isDate;

  this.checkString = check_string;
  this.checkString2 = check_string2;
  this.checkNroSerie = check_nroSerie;
  this.checkFixedString = check_fixedString;
  this.checkNumber = check_number;
  this.checkNumberPos = check_numberPos;
  this.checkFloat = check_float;
  this.checkDate = check_date;
  this.checkEmail = check_email;
  this.checkCombo = check_combo;
  this.compareDates = check_compareDates;
  this.checkImagen = check_imagen;
  this.toString = check_toString;
}

function check_getInput (strInput) {
	return eval("document." + this.strForm + "." + strInput);
}

function check_getNextPosition () {
	return this.arrErrors.length;
}

function check_checkError (objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, strErrorMessage) {
  var intPosition = this.getNextPosition();
  var objRegExp = new RegExp(strRegExp);

  if (!objInput.value.length) {
    if (!blnOptional){
            this.arrErrors[intPosition] = "Por favor indique su " + strNameShow;
            return false;
    }else
            return true;
  }else{
    if ((!objRegExp.test(objInput.value))) {
            this.arrErrors[intPosition] = "The field " + strNameShow + (strErrorMessage ? strErrorMessage : " contains invalid characters" );
            return false;
    }else if (objInput.value.length < intMinLen) {
                    this.arrErrors[intPosition] = "El " + strNameShow + " debe tener " + intMinLen + " digitos";
                    return false;
            }else if (objInput.value.length > intMaxLen) {
                            this.arrErrors[intPosition] = "The field " + strNameShow + " no debe tener mas de " + intMaxLen + " digitos";
                            return false;
                    }
                    else
                            return true;
  }
}

function check_checkError2 (objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, strErrorMessage) {
  var intPosition = this.getNextPosition();
  var objRegExp = new RegExp(strRegExp);

  if (!objInput.value.length) {
    if (!blnOptional){
            this.arrErrors[intPosition] = "Please indicate your " + strNameShow;
            return false;
    }else
            return true;
  }else{
    if ((!objRegExp.test(objInput.value))) {
            this.arrErrors[intPosition] = "The field  " + strNameShow + (strErrorMessage ? strErrorMessage : " contains invalid characters" );
            return false;
    }else if (objInput.value.length < intMinLen) {
                    this.arrErrors[intPosition] = "El " + strNameShow + " debe tener " + intMinLen + " digitos";
                    return false;
            }else if (objInput.value.length > intMaxLen) {
                            this.arrErrors[intPosition] = "The field " + strNameShow + " no debe tener mas de " + intMaxLen + " digitos";
                            return false;
                    }
                    else
                            return true;
  }
}

function check_checkFixedError (objInput, strNameShow, strRegExp, intLen, blnOptional, strErrorMessage) {
  var intPosition = this.getNextPosition();
  var objRegExp = new RegExp(strRegExp);

  if (!objInput.value.length) {
          if (!blnOptional){
                  this.arrErrors[intPosition] = "Please indicate your " + strNameShow;
                  return false;
          }else
                  return true;
  }else{
          if ((!objRegExp.test(objInput.value))) {
                  this.arrErrors[intPosition] = "The field " + strNameShow + (strErrorMessage ? strErrorMessage : " contains invalid characters" );
                  return false;
          }else if (objInput.value.length != intLen) {
                          this.arrErrors[intPosition] = "The field " + strNameShow + " debe tener " + intLen + " caracteres";
                          return false;
                  } else
                          return true;
  }
}

function check_isDate(datFecha) {
  var arrFecha = datFecha.split("http://clientesutf.grupoeido.org/");
  var datFechaValida = new Date(arrFecha[2], arrFecha[1] - 1, arrFecha[0]);

  if ((arrFecha[0] == datFechaValida.getDate()) &&
          (arrFecha[1] == (datFechaValida.getMonth() + 1)) &&
          (arrFecha[2] == datFechaValida.getFullYear()))
          return true;
  else
          return false;
}

function check_string (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  //var strRegExp = "^[^']+$";
  var strRegExp = "^[^<>]+$";

  return this.checkError(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false);
}

function check_string2 (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  //var strRegExp = "^[^']+$";
  var strRegExp = "^[^<>]+$";

  return this.checkError2(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false);
}

function check_nroSerie (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  //var strRegExp = "(^\\w{2})+(\\[0-9]{4})+$";
  //var strRegExp = "(^[^<>'0123456789]{2})+\([0-9]{4})+$";
  //var strRegExp = "^[^<>'0123456789]{1,2}-?[0-9]{4}$";
  var strRegExp = "(^[^<>'0123456789]{1,2})+\(-?[0-9]{4})+$";
  var strRegExp = "(^[a-zA-Z]{1,2})+\(-?[0-9]{4})+$";
  return this.checkError(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false);
}

function check_fixedString (strInput, strNameShow, intLen, blnOptional) {
  var objInput = this.getInput(strInput);
  var strRegExp = "^[^<>']+$";

  return this.checkFixedError(objInput, strNameShow, strRegExp, intLen, blnOptional, false);
}

function check_number (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  var strRegExp = "^[0-9]+$";

  return this.checkError(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false);
}

function check_numberPos (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  var strRegExp = "^[0-9]+$";

  if (this.checkError(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false)) {
          if (objInput.value > 0)
                  return true;
          else {
                  this.arrErrors[this.getNextPosition()] = "The field " + strNameShow + " debe ser positivo";
                  return false;
          }
  } else
          return false;
}

function check_float (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  var strRegExp = "^[0-9]+(\\.[0-9]+)?$";

  return this.checkError(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false);
}

function check_date (strInput, strNameShow, blnOptional) {
  var objInput = this.getInput(strInput);
  var strRegExp = "^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}";
  var intPosition;

  if ((objInput.value.length == 0) && (blnOptional)) return true;
  if (this.checkError(objInput, strNameShow, strRegExp, 8, 10, blnOptional, " no contiene una fecha válida"))
          if (!this.isDate(objInput.value)) {
                  var intPosition = this.getNextPosition();
                  this.arrErrors[intPosition] = "The field " + strNameShow + " no contiene una fecha válida";
                  return false;
          } else
                  return true;
}

function check_email (strInput, strNameShow, intMinLen, intMaxLen, blnOptional) {
  var objInput = this.getInput(strInput);
  var strRegExp = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";

  return this.checkError(objInput, strNameShow, strRegExp, intMinLen, intMaxLen, blnOptional, false);
}

function check_combo (strInput, strNameShow, blnOptional) {
  var objInput = this.getInput(strInput);

  if (blnOptional) {
          return true;
  }
  else {
          if (objInput.selectedIndex > 0) {
                  return true;
          }
          else {
                  var intPosition = this.getNextPosition();
                  this.arrErrors[intPosition] = "Debe elegir una opcion para The field " + strNameShow;

                  return false;
          }
  }
}

function check_compareDates(strInput1, strInput2, strUnidad) {
  if ((!this.isDate(strInput1)) || (!this.isDate(strInput2)))
          return null;

//        Si son fechas válidas, las paso a arrays para compararlas.
  var arrFecha1 = strInput1.split("http://clientesutf.grupoeido.org/");
  var datFechaValida1 = new Date(arrFecha1[2], arrFecha1[1] - 1, arrFecha1[0]);
  var arrFecha2 = strInput2.split("http://clientesutf.grupoeido.org/");
  var datFechaValida2 = new Date(arrFecha2[2], arrFecha2[1] - 1, arrFecha2[0]);
  var intAjuste;

  switch (strUnidad) {
//                El resultado te lo devuelve en años
          case "a":
          case "A":
                  intAjuste = 86400000 * 365;
                  break;
//                El resultado te lo devuelve en horas
          case "h":
          case "H":
                  intAjuste = 86400000 / 24;
                  break;
//                El resultado te lo devuelve por default en días
          case "d":
          case "D":
          default:
                  intAjuste = 86400000;
                  break;
  }

  return ((datFechaValida1 - datFechaValida2) / intAjuste);
}

function check_toString () {
  var strErrors = "";
  var i;

  for (i = 0; i < this.arrErrors.length; i++) {
          strErrors = strErrors + this.arrErrors[i] + "<br />";
  }

  return strErrors;
}


function check_imagen (strInput, strNameShow) {
  var intPosition = this.getNextPosition();
  var objRegExp = new RegExp(strRegExp);
  var arrImagen = new Array()
  var objInput = this.getInput(strInput);
  var strRegExp = "^[^<>']+$";

  if (!objInput.value.length)
  {
          return true;
  }
  else
  {
          if ((!objRegExp.test(objInput.value)))
          {
             this.arrErrors[intPosition] = "The field " + strNameShow +  " contains invalid characters";
             return false;
          }
          else
          {
              arrImagen = objInput.value.split(".");
              if (arrImagen.length == 2)
              {
                      if(arrImagen[1] == "jpg" || arrImagen[1] == "jpeg" || arrImagen[1] == "png" )
                      {
                              return true;
                      }
                      else
                      {
                         this.arrErrors[intPosition] = "La imagen dThe field " + strNameShow + arrImagen[1] + " debe ser jpg, jpeg o png";
                         return false;

                      }
              }
              else
              {
                  this.arrErrors[intPosition] = "The field " + strNameShow + " contains invalid characters";
                  return false;

              }
          }
  }
}
