/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateHotel: OnCreateHotelSubscription;
  onUpdateHotel: OnUpdateHotelSubscription;
  onDeleteHotel: OnDeleteHotelSubscription;
  onCreateRoomtType: OnCreateRoomtTypeSubscription;
  onUpdateRoomtType: OnUpdateRoomtTypeSubscription;
  onDeleteRoomtType: OnDeleteRoomtTypeSubscription;
  onCreateReservation: OnCreateReservationSubscription;
  onUpdateReservation: OnUpdateReservationSubscription;
  onDeleteReservation: OnDeleteReservationSubscription;
};

export type CreateHotelInput = {
  id?: string | null;
  name: string;
  address?: string | null;
  image?: string | null;
};

export type ModelHotelConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelHotelConditionInput | null> | null;
  or?: Array<ModelHotelConditionInput | null> | null;
  not?: ModelHotelConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Hotel = {
  // __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: ModelRoomtTypeConnection | null;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelRoomtTypeConnection = {
  __typename: "ModelRoomtTypeConnection";
  items: Array<RoomtType | null>;
  nextToken?: string | null;
};

export type RoomtType = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type UpdateHotelInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  image?: string | null;
};

export type DeleteHotelInput = {
  id: string;
};

export type CreateRoomtTypeInput = {
  id?: string | null;
  type: string;
  count: number;
  hotelRoomTypesId?: string | null;
};

export type ModelRoomtTypeConditionInput = {
  type?: ModelStringInput | null;
  count?: ModelIntInput | null;
  and?: Array<ModelRoomtTypeConditionInput | null> | null;
  or?: Array<ModelRoomtTypeConditionInput | null> | null;
  not?: ModelRoomtTypeConditionInput | null;
  hotelRoomTypesId?: ModelIDInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateRoomtTypeInput = {
  id: string;
  type?: string | null;
  count?: number | null;
  hotelRoomTypesId?: string | null;
};

export type DeleteRoomtTypeInput = {
  id: string;
};

export type CreateReservationInput = {
  id?: string | null;
  clientName: string;
  fromDate: string;
  toDate: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type ModelReservationConditionInput = {
  clientName?: ModelStringInput | null;
  fromDate?: ModelStringInput | null;
  toDate?: ModelStringInput | null;
  and?: Array<ModelReservationConditionInput | null> | null;
  or?: Array<ModelReservationConditionInput | null> | null;
  not?: ModelReservationConditionInput | null;
  reservationRoomTypeId?: ModelIDInput | null;
  reservationHotelId?: ModelIDInput | null;
};

export type Reservation = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: RoomtType;
  fromDate: string;
  toDate: string;
  hotel?: Hotel | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type UpdateReservationInput = {
  id: string;
  clientName?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type DeleteReservationInput = {
  id: string;
};

export type ModelHotelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelHotelFilterInput | null> | null;
  or?: Array<ModelHotelFilterInput | null> | null;
  not?: ModelHotelFilterInput | null;
};

export type ModelHotelConnection = {
  __typename: "ModelHotelConnection";
  items: Array<Hotel | null>;
  nextToken?: string | null;
};

export type ModelRoomtTypeFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  count?: ModelIntInput | null;
  and?: Array<ModelRoomtTypeFilterInput | null> | null;
  or?: Array<ModelRoomtTypeFilterInput | null> | null;
  not?: ModelRoomtTypeFilterInput | null;
  hotelRoomTypesId?: ModelIDInput | null;
};

export type ModelReservationFilterInput = {
  id?: ModelIDInput | null;
  clientName?: ModelStringInput | null;
  fromDate?: ModelStringInput | null;
  toDate?: ModelStringInput | null;
  and?: Array<ModelReservationFilterInput | null> | null;
  or?: Array<ModelReservationFilterInput | null> | null;
  not?: ModelReservationFilterInput | null;
  reservationRoomTypeId?: ModelIDInput | null;
  reservationHotelId?: ModelIDInput | null;
};

export type ModelReservationConnection = {
  __typename: "ModelReservationConnection";
  items: Array<Reservation | null>;
  nextToken?: string | null;
};

export type CreateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHotelMutation = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRoomtTypeMutation = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type UpdateRoomtTypeMutation = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type DeleteRoomtTypeMutation = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type CreateReservationMutation = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type UpdateReservationMutation = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type DeleteReservationMutation = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type GetHotelQuery = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHotelsQuery = {
  __typename: "ModelHotelConnection";
  items: Array<{
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRoomtTypeQuery = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type ListRoomtTypesQuery = {
  __typename: "ModelRoomtTypeConnection";
  items: Array<{
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetReservationQuery = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type ListReservationsQuery = {
  __typename: "ModelReservationConnection";
  items: Array<{
    __typename: "Reservation";
    id: string;
    clientName: string;
    roomType: {
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    };
    fromDate: string;
    toDate: string;
    hotel?: {
      __typename: "Hotel";
      id: string;
      name: string;
      address?: string | null;
      image?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    reservationRoomTypeId: string;
    reservationHotelId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHotelSubscription = {
  __typename: "Hotel";
  id: string;
  name: string;
  address?: string | null;
  image?: string | null;
  roomTypes?: {
    __typename: "ModelRoomtTypeConnection";
    items: Array<{
      __typename: "RoomtType";
      id: string;
      type: string;
      count: number;
      createdAt: string;
      updatedAt: string;
      hotelRoomTypesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRoomtTypeSubscription = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type OnUpdateRoomtTypeSubscription = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type OnDeleteRoomtTypeSubscription = {
  __typename: "RoomtType";
  id: string;
  type: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  hotelRoomTypesId?: string | null;
};

export type OnCreateReservationSubscription = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type OnUpdateReservationSubscription = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

export type OnDeleteReservationSubscription = {
  __typename: "Reservation";
  id: string;
  clientName: string;
  roomType: {
    __typename: "RoomtType";
    id: string;
    type: string;
    count: number;
    createdAt: string;
    updatedAt: string;
    hotelRoomTypesId?: string | null;
  };
  fromDate: string;
  toDate: string;
  hotel?: {
    __typename: "Hotel";
    id: string;
    name: string;
    address?: string | null;
    image?: string | null;
    roomTypes?: {
      __typename: "ModelRoomtTypeConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  reservationRoomTypeId: string;
  reservationHotelId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHotel(
    input: CreateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<CreateHotelMutation> {
    const statement = `mutation CreateHotel($input: CreateHotelInput!, $condition: ModelHotelConditionInput) {
        createHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHotelMutation>response.data.createHotel;
  }
  async UpdateHotel(
    input: UpdateHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<UpdateHotelMutation> {
    const statement = `mutation UpdateHotel($input: UpdateHotelInput!, $condition: ModelHotelConditionInput) {
        updateHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHotelMutation>response.data.updateHotel;
  }
  async DeleteHotel(
    input: DeleteHotelInput,
    condition?: ModelHotelConditionInput
  ): Promise<DeleteHotelMutation> {
    const statement = `mutation DeleteHotel($input: DeleteHotelInput!, $condition: ModelHotelConditionInput) {
        deleteHotel(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHotelMutation>response.data.deleteHotel;
  }
  async CreateRoomtType(
    input: CreateRoomtTypeInput,
    condition?: ModelRoomtTypeConditionInput
  ): Promise<CreateRoomtTypeMutation> {
    const statement = `mutation CreateRoomtType($input: CreateRoomtTypeInput!, $condition: ModelRoomtTypeConditionInput) {
        createRoomtType(input: $input, condition: $condition) {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomtTypeMutation>response.data.createRoomtType;
  }
  async UpdateRoomtType(
    input: UpdateRoomtTypeInput,
    condition?: ModelRoomtTypeConditionInput
  ): Promise<UpdateRoomtTypeMutation> {
    const statement = `mutation UpdateRoomtType($input: UpdateRoomtTypeInput!, $condition: ModelRoomtTypeConditionInput) {
        updateRoomtType(input: $input, condition: $condition) {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomtTypeMutation>response.data.updateRoomtType;
  }
  async DeleteRoomtType(
    input: DeleteRoomtTypeInput,
    condition?: ModelRoomtTypeConditionInput
  ): Promise<DeleteRoomtTypeMutation> {
    const statement = `mutation DeleteRoomtType($input: DeleteRoomtTypeInput!, $condition: ModelRoomtTypeConditionInput) {
        deleteRoomtType(input: $input, condition: $condition) {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomtTypeMutation>response.data.deleteRoomtType;
  }
  async CreateReservation(
    input: CreateReservationInput,
    condition?: ModelReservationConditionInput
  ): Promise<CreateReservationMutation> {
    const statement = `mutation CreateReservation($input: CreateReservationInput!, $condition: ModelReservationConditionInput) {
        createReservation(input: $input, condition: $condition) {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReservationMutation>response.data.createReservation;
  }
  async UpdateReservation(
    input: UpdateReservationInput,
    condition?: ModelReservationConditionInput
  ): Promise<UpdateReservationMutation> {
    const statement = `mutation UpdateReservation($input: UpdateReservationInput!, $condition: ModelReservationConditionInput) {
        updateReservation(input: $input, condition: $condition) {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReservationMutation>response.data.updateReservation;
  }
  async DeleteReservation(
    input: DeleteReservationInput,
    condition?: ModelReservationConditionInput
  ): Promise<DeleteReservationMutation> {
    const statement = `mutation DeleteReservation($input: DeleteReservationInput!, $condition: ModelReservationConditionInput) {
        deleteReservation(input: $input, condition: $condition) {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReservationMutation>response.data.deleteReservation;
  }
  async GetHotel(id: string): Promise<GetHotelQuery> {
    const statement = `query GetHotel($id: ID!) {
        getHotel(id: $id) {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHotelQuery>response.data.getHotel;
  }
  async ListHotels(
    filter?: ModelHotelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHotelsQuery> {
    const statement = `query ListHotels($filter: ModelHotelFilterInput, $limit: Int, $nextToken: String) {
        listHotels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHotelsQuery>response.data.listHotels;
  }
  async GetRoomtType(id: string): Promise<GetRoomtTypeQuery> {
    const statement = `query GetRoomtType($id: ID!) {
        getRoomtType(id: $id) {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomtTypeQuery>response.data.getRoomtType;
  }
  async ListRoomtTypes(
    filter?: ModelRoomtTypeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomtTypesQuery> {
    const statement = `query ListRoomtTypes($filter: ModelRoomtTypeFilterInput, $limit: Int, $nextToken: String) {
        listRoomtTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomtTypesQuery>response.data.listRoomtTypes;
  }
  async GetReservation(id: string): Promise<GetReservationQuery> {
    const statement = `query GetReservation($id: ID!) {
        getReservation(id: $id) {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReservationQuery>response.data.getReservation;
  }
  async ListReservations(
    filter?: ModelReservationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReservationsQuery> {
    const statement = `query ListReservations($filter: ModelReservationFilterInput, $limit: Int, $nextToken: String) {
        listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            clientName
            roomType {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            fromDate
            toDate
            hotel {
              __typename
              id
              name
              address
              image
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            reservationRoomTypeId
            reservationHotelId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReservationsQuery>response.data.listReservations;
  }
  OnCreateHotelListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHotel {
        onCreateHotel {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHotel">>
  >;

  OnUpdateHotelListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHotel {
        onUpdateHotel {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHotel">>
  >;

  OnDeleteHotelListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHotel {
        onDeleteHotel {
          __typename
          id
          name
          address
          image
          roomTypes {
            __typename
            items {
              __typename
              id
              type
              count
              createdAt
              updatedAt
              hotelRoomTypesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHotel">>
  >;

  OnCreateRoomtTypeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoomtType">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoomtType {
        onCreateRoomtType {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoomtType">>
  >;

  OnUpdateRoomtTypeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoomtType">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoomtType {
        onUpdateRoomtType {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoomtType">>
  >;

  OnDeleteRoomtTypeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoomtType">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoomtType {
        onDeleteRoomtType {
          __typename
          id
          type
          count
          createdAt
          updatedAt
          hotelRoomTypesId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoomtType">>
  >;

  OnCreateReservationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReservation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReservation {
        onCreateReservation {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReservation">>
  >;

  OnUpdateReservationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReservation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReservation {
        onUpdateReservation {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReservation">>
  >;

  OnDeleteReservationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReservation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReservation {
        onDeleteReservation {
          __typename
          id
          clientName
          roomType {
            __typename
            id
            type
            count
            createdAt
            updatedAt
            hotelRoomTypesId
          }
          fromDate
          toDate
          hotel {
            __typename
            id
            name
            address
            image
            roomTypes {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          reservationRoomTypeId
          reservationHotelId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReservation">>
  >;
}
