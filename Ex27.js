function inverteObjeto(obj) {
    const newObj = {};
    for (const prop in obj) {
      newObj[obj[prop]] = prop;
    }
    return newObj;
  }
  