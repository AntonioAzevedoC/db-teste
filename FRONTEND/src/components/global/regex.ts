// A file containing all the regexes used in the project

// Name input regex
export const reName = /^(?=.{3,80}$)\p{L}+(?: \p{L}+)*$/u; // Only letters, letters with accent marks, and empty space, but only one at a time

// Standard email regex
export const reEmail = /^(?=.{3,80}$)[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password regexes
export const reLength = /^.{8,80}$/; // 8–80 characters
export const reLowercase = /[a-z]/; // at least one lowercase letter
export const reUppercase = /[A-Z]/; // at least one uppercase letter
export const reNumber = /\d/; // at least one digit (0-9)
export const reSymbol = /[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]/; // at least one symbol
export const reNoSpace = /^\S+$/; // no spaces or tabs

// At least one symbol, one uppercase letter, one lowercase letter, one number, minimum 8 characters and maximum of 80 characters. A combination of all the password regexes
export const rePasswd =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~])[\S]{8,80}$/;
