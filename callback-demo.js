function asyncThing(cb) {
  setTimeout(() => {
    cb({some: 'data', in: 'here'});
  }, 5000); 
}

function handleCallback() {
  console.log(data);
}

asyncThing(handleCallback);