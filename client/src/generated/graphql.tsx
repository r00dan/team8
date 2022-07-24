import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  color: Scalars['String'];
  firstName: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Array<User>;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type PrivateRoom = {
  __typename?: 'PrivateRoom';
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  user: Array<User>;
};

export type PublicRoom = {
  __typename?: 'PublicRoom';
  color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  users: Array<User>;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  getUserCompanions: Array<PrivateRoom>;
  getUserPublicRooms: Array<PublicRoom>;
  getUsers: Array<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetUserCompanionsArgs = {
  id: Scalars['String'];
};


export type QueryGetUserPublicRoomsArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  color?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  privateRooms: Array<PrivateRoom>;
  publicRooms: Array<PublicRoom>;
  username: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: Array<{ __typename?: 'User', id: string, username: string, icon?: string | null, color?: string | null }> };


export const CreateUserDocument = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    username
    icon
    color
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;