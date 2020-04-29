export type Maybe<T> = T | null;
// /** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface Homeworld {
  name: Maybe<Scalars['String']>;
}

export interface Character {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  birthYear?: Maybe<Scalars['String']>;
  eyeColor?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hairColor?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mass?: Maybe<Scalars['Float']>;
  skinColor?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Homeworld>;
}
