type System = {
  root?: Element;
};

const system: System = {
  root: document.getElementById('root') as Element,
};

export { system, System };
