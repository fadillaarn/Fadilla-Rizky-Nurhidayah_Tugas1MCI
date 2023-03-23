function getTargets() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const targets = [
            "Jadi admin MCI <3",
            "IELTS min 7",
            "Upgrade skill",
            "Naikin IP",
            "Bismillah uang jajan nambah"
        ];
        resolve(targets);
      }, 2000);
    });
  }
  
  getTargets()
    .then(targets => {
      console.log("Target hidup dildul di tahun 2023");
      targets.forEach((target, index) => {
        console.log(`${index + 1}. ${target}`);
      });
    })
    .catch(error => {
      console.error(error);
    });