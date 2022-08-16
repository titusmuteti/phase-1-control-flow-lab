function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return "This one is on me!"
  } else if (distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city ){
  const town = (city === 'NYC') ? "Ok, sounds good." : "No go.";
  return town;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;

    case 'not as generous':
      return 'Thank you.';
      break;

    default:
      return 'Bye.'
      break;
  }
}