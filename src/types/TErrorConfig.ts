/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

export type TErrorConfig = {
  required: string,
  invalid?: string,
}

export type TTextErrorConfig = { 
  required: string,  
}

export type TEmailErrorConfig = { 
  required: string,
  invalid: string,
}