export const updateAuraPosition = (e, aura) => {
    if(aura){
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    }
}