let x=true;
switch (typeof x) {
  case "number":
    console.log (x, "-число");
    break;
  case "string":
    console.log (x, "-строка");
    break;
  case "boolean":
    console.log (x, "-логический тип данных");
    break;
  default :
    console.log (x, "Тип не определен");
}