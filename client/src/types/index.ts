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
  readonly color: Scalars['String'];
  readonly firstName: Scalars['String'];
  readonly icon: Scalars['String'];
  readonly id: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type PrivateRoom = {
  readonly __typename?: 'PrivateRoom';
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly ownerId: Scalars['String'];
  readonly user: ReadonlyArray<User>;
};

export type PublicRoom = {
  readonly __typename?: 'PublicRoom';
  readonly color?: Maybe<Scalars['String']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly ownerId: Scalars['String'];
  readonly users: ReadonlyArray<User>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly getUser: User;
  readonly getUserCompanions: ReadonlyArray<PrivateRoom>;
  readonly getUserPublicRooms: ReadonlyArray<PublicRoom>;
  readonly getUsers: ReadonlyArray<User>;
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
  readonly __typename?: 'User';
  readonly color?: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly password: Scalars['String'];
  readonly privateRooms: ReadonlyArray<PrivateRoom>;
  readonly publicRooms: ReadonlyArray<PublicRoom>;
  readonly username: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutationData = { readonly __typename?: 'Mutation', readonly createUser: { readonly __typename?: 'User', readonly id: string, readonly username: string, readonly icon?: string | null, readonly color?: string | null } };


export const CreateUserVariables = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    username
    icon
    color
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutationData, CreateUserMutationVariables>;

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
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutationData, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutationData, CreateUserMutationVariables>(CreateUserVariables, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutationData>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutationData, CreateUserMutationVariables>;