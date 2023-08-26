//
//  ExpressServerConnection.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/24/23.
//

import Foundation
import SwiftUI

enum MarshalError:Error{
    case invalidResponse
    case invalidStatus
    case teapot
}

struct GrandMarshal:Codable{
    let name: String
    let year: String
    let imageName: String
}
enum CodingKeys: String, CodingKey{
    case name = "name-key"
    case year = "year-key"
}
struct MarshalResponse: Codable{
    var marshals: [GrandMarshal]
}

var currentError: MarshalError = MarshalError.teapot


let baseURL = "https://localhost:1979/"

func getGrandMarshalData() async throws-> GrandMarshal{
    
    let queryURL = "\(baseURL)/grandMarshalData"
    
    let jsonDecoder = JSONDecoder()
    
    var marshalURLComponent = URLComponents(string: baseURL)
    let (data, response) = try await URLSession.shared.data(from: marshalURLComponent!.url!)
    
    
    guard let response = response as? HTTPURLResponse else{
        throw MarshalError.invalidResponse
    }
    guard response.statusCode == 200 else{
        throw MarshalError.invalidStatus
    }
    
    let jsonData = try jsonDecoder.decode(GrandMarshal.self, from: data)
        
    return (jsonData)

}
