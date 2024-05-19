import { EVENTS } from "./Consts";

export function navigate(href) {
  window.history.pushState({}, '', href);
  // crear evento personalizado para que el navegador nos avise
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; // click principal
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey; // botones alternativos
    const isManageableEvent = target === undefined || target === self;

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to); // uso del spa para navegar por las diferentes ventanas.
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props}></a>;
}
