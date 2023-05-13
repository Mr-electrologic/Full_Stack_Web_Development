const dept = {
    deptid: 'D-1',
    dname: 'sales',
    budget: '20 lacs'
  };
  
  for (const attribute in dept) {
    console.log(`${attribute}: ${dept[attribute]}`);
  }