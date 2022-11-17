// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Marshal from "../shared/Marshal.js";
import * as GenreModel from "./GenreModel.js";
import * as ImageModel from "./ImageModel.js";
import * as Json$JsonCombinators from "@glennsl/rescript-json-combinators/src/Json.js";
import * as Json_Decode$JsonCombinators from "@glennsl/rescript-json-combinators/src/Json_Decode.js";

var video = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              id: Marshal.to_opt(fields, "id", Json_Decode$JsonCombinators.string),
              key: Marshal.to_opt(fields, "key", Json_Decode$JsonCombinators.string),
              site: Marshal.to_opt(fields, "site", Json_Decode$JsonCombinators.string),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              type_: Marshal.to_opt(fields, "type", Json_Decode$JsonCombinators.string)
            };
    });

var images = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              backdrops: Marshal.to_opt(fields, "backdrops", Json_Decode$JsonCombinators.array(ImageModel.ImageDecoder.image)),
              logos: Marshal.to_opt(fields, "logos", Json_Decode$JsonCombinators.array(ImageModel.ImageDecoder.image)),
              posters: Marshal.to_opt(fields, "posters", Json_Decode$JsonCombinators.array(ImageModel.ImageDecoder.image))
            };
    });

var cast = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              adult: Marshal.to_opt(fields, "adult", Json_Decode$JsonCombinators.bool),
              gender: Marshal.to_opt(fields, "gender", Json_Decode$JsonCombinators.$$int),
              id: Marshal.to_opt(fields, "id", Json_Decode$JsonCombinators.$$int),
              known_for_department: Marshal.to_opt(fields, "known_for_department", Json_Decode$JsonCombinators.string),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              popularity: Marshal.to_opt(fields, "popularity", Json_Decode$JsonCombinators.$$float),
              profile_path: Marshal.to_opt(fields, "profile_path", Json_Decode$JsonCombinators.string),
              cast_id: Marshal.to_opt(fields, "cast_id", Json_Decode$JsonCombinators.$$int),
              character: Marshal.to_opt(fields, "character", Json_Decode$JsonCombinators.string),
              credit_id: Marshal.to_opt(fields, "credit_id", Json_Decode$JsonCombinators.string),
              order: Marshal.to_opt(fields, "order", Json_Decode$JsonCombinators.$$int)
            };
    });

var crew = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              adult: Marshal.to_opt(fields, "adult", Json_Decode$JsonCombinators.bool),
              gender: Marshal.to_opt(fields, "gender", Json_Decode$JsonCombinators.$$int),
              id: Marshal.to_opt(fields, "id", Json_Decode$JsonCombinators.$$int),
              known_for_department: Marshal.to_opt(fields, "known_for_department", Json_Decode$JsonCombinators.string),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              original_name: Marshal.to_opt(fields, "original_name", Json_Decode$JsonCombinators.string),
              popularity: Marshal.to_opt(fields, "popularity", Json_Decode$JsonCombinators.$$float),
              profile_path: Marshal.to_opt(fields, "profile_path", Json_Decode$JsonCombinators.string),
              credit_id: Marshal.to_opt(fields, "credit_id", Json_Decode$JsonCombinators.string),
              department: Marshal.to_opt(fields, "department", Json_Decode$JsonCombinators.string),
              job: Marshal.to_opt(fields, "job", Json_Decode$JsonCombinators.string)
            };
    });

var external_ids = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              imdb_id: Marshal.to_opt(fields, "imdb_id", Json_Decode$JsonCombinators.string),
              facebook_id: Marshal.to_opt(fields, "facebook_id", Json_Decode$JsonCombinators.string),
              instagram_id: Marshal.to_opt(fields, "instagram_id", Json_Decode$JsonCombinators.string),
              twitter_id: Marshal.to_opt(fields, "twitter_id", Json_Decode$JsonCombinators.string)
            };
    });

var production_company = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              origin_country: Marshal.to_opt(fields, "origin_country", Json_Decode$JsonCombinators.string)
            };
    });

var spoken_language = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              english_name: Marshal.to_opt(fields, "english_name", Json_Decode$JsonCombinators.string),
              iso_639_1: Marshal.to_opt(fields, "iso_639_1", Json_Decode$JsonCombinators.string),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string)
            };
    });

var videos = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              results: Marshal.to_opt(fields, "results", Json_Decode$JsonCombinators.array(video))
            };
    });

var credits = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              cast: Marshal.to_opt(fields, "cast", Json_Decode$JsonCombinators.array(cast)),
              crew: Marshal.to_opt(fields, "crew", Json_Decode$JsonCombinators.array(crew))
            };
    });

var created_by = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              id: Marshal.to_opt(fields, "id", Json_Decode$JsonCombinators.$$int),
              credit_id: Marshal.to_opt(fields, "credit_id", Json_Decode$JsonCombinators.string),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              gender: Marshal.to_opt(fields, "gender", Json_Decode$JsonCombinators.$$int),
              profile_path: Marshal.to_opt(fields, "profile_path", Json_Decode$JsonCombinators.string)
            };
    });

var episode = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              air_date: Marshal.to_opt(fields, "air_date", Json_Decode$JsonCombinators.string),
              episode_count: Marshal.to_opt(fields, "episode_count", Json_Decode$JsonCombinators.$$int),
              id: Marshal.to_opt(fields, "id", Json_Decode$JsonCombinators.$$int),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              overview: Marshal.to_opt(fields, "overview", Json_Decode$JsonCombinators.string),
              poster_path: Marshal.to_opt(fields, "poster_path", Json_Decode$JsonCombinators.string),
              season_number: Marshal.to_opt(fields, "season_number", Json_Decode$JsonCombinators.$$int)
            };
    });

var detail_movie = Json_Decode$JsonCombinators.object(function (fields) {
      return {
              adult: Marshal.to_opt(fields, "adult", Json_Decode$JsonCombinators.bool),
              backdrop_path: Marshal.to_opt(fields, "backdrop_path", Json_Decode$JsonCombinators.string),
              genres: Marshal.to_opt(fields, "genres", Json_Decode$JsonCombinators.array(GenreModel.GenreDecoder.genre)),
              id: fields.required("id", Json_Decode$JsonCombinators.$$int),
              original_language: Marshal.to_opt(fields, "original_language", Json_Decode$JsonCombinators.string),
              original_title: Marshal.to_opt(fields, "original_title", Json_Decode$JsonCombinators.string),
              overview: Marshal.to_opt(fields, "overview", Json_Decode$JsonCombinators.string),
              tagline: Marshal.to_opt(fields, "tagline", Json_Decode$JsonCombinators.string),
              popularity: Marshal.to_opt(fields, "popularity", Json_Decode$JsonCombinators.$$float),
              poster_path: Marshal.to_opt(fields, "poster_path", Json_Decode$JsonCombinators.string),
              release_date: Marshal.to_opt(fields, "release_date", Json_Decode$JsonCombinators.string),
              runtime: Marshal.to_opt(fields, "runtime", Json_Decode$JsonCombinators.$$float),
              status: Marshal.to_opt(fields, "status", Json_Decode$JsonCombinators.string),
              title: Marshal.to_opt(fields, "title", Json_Decode$JsonCombinators.string),
              homepage: Marshal.to_opt(fields, "homepage", Json_Decode$JsonCombinators.string),
              video: Marshal.to_opt(fields, "video", Json_Decode$JsonCombinators.bool),
              vote_average: Marshal.to_opt(fields, "vote_average", Json_Decode$JsonCombinators.$$float),
              vote_count: Marshal.to_opt(fields, "vote_count", Json_Decode$JsonCombinators.$$int),
              budget: Marshal.to_opt(fields, "budget", Json_Decode$JsonCombinators.$$float),
              revenue: Marshal.to_opt(fields, "revenue", Json_Decode$JsonCombinators.$$float),
              external_ids: Marshal.to_opt(fields, "external_ids", external_ids),
              production_companies: Marshal.to_opt(fields, "production_companies", Json_Decode$JsonCombinators.array(production_company)),
              videos: Marshal.to_opt(fields, "videos", videos),
              credits: Marshal.to_opt(fields, "credits", credits),
              images: Marshal.to_opt(fields, "images", images),
              spoken_languages: Marshal.to_opt(fields, "spoken_languages", Json_Decode$JsonCombinators.array(spoken_language)),
              created_by: Marshal.to_opt(fields, "created_by", created_by),
              episode_run_time: Marshal.to_opt(fields, "episode_run_time", Json_Decode$JsonCombinators.array(Json_Decode$JsonCombinators.$$int)),
              first_air_date: Marshal.to_opt(fields, "first_air_date", Json_Decode$JsonCombinators.string),
              last_air_date: Marshal.to_opt(fields, "last_air_date", Json_Decode$JsonCombinators.string),
              in_production: Marshal.to_opt(fields, "in_production", Json_Decode$JsonCombinators.bool),
              name: Marshal.to_opt(fields, "name", Json_Decode$JsonCombinators.string),
              number_of_episodes: Marshal.to_opt(fields, "number_of_episodes", Json_Decode$JsonCombinators.$$int),
              number_of_seasons: Marshal.to_opt(fields, "number_of_seasons", Json_Decode$JsonCombinators.$$int),
              original_name: Marshal.to_opt(fields, "original_name", Json_Decode$JsonCombinators.string),
              episodes: Marshal.to_opt(fields, "episodes", Json_Decode$JsonCombinators.array(episode))
            };
    });

function decode(json) {
  return Json$JsonCombinators.decode(json, detail_movie);
}

var Decoder = {
  video: video,
  images: images,
  cast: cast,
  crew: crew,
  external_ids: external_ids,
  production_company: production_company,
  spoken_language: spoken_language,
  videos: videos,
  credits: credits,
  created_by: created_by,
  episode: episode,
  detail_movie: detail_movie,
  decode: decode
};

export {
  Decoder ,
}
/* video Not a pure module */
