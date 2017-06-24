require 'minitest/autorun'
require './siskel.rb'

class TestSiskel < Minitest::Test
  def test_movie_title
    movie = Siskel.new('Kill Bill')
    assert_equal 'Kill Bill: Vol. 1', movie.title
  end

  def test_movie_rating
    movie = Siskel.new("The Hangover")
    assert_equal "R", movie.rating
  end

  def test_movie_year
    movie = Siskel.new("Blade Runner")
    assert_equal "1982", movie.year
  end

  def test_movie_plot
    movie = Siskel.new("Mean Girls")
    assert_equal "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.", movie.plot
  end

  def test_fake_movie_title
    movie = Siskel.new("Walter's Wonderful World, A Very Fake Movie")
    assert_equal "Movie not found!", movie.title
  end

  def test_remake_with_different_year
    movie = Siskel.new("Parent Trap", year: 1961)
    assert_equal "1961", movie.year
  end

  def test_movie_with_full_plot
    movie = Siskel.new("The Parent Trap", plot: :full)
    assert_equal "Identical twins Annie and Hallie, separated at birth and each raised by one of their biological parents, later discover each other for the first time at summer camp and make a plan to bring their wayward parents back together.", movie.plot
  end

  # Films with a tomato meter between 76 and 100 get two thumbs up.
  # Films with a tomato meter between 51 and 75 get a thumbs up.
  # Films with a tomato meter between 26 and 50 get a thumbs down.
  # Films with a tomato meter between 0 and 25 get two thumbs down.

  def test_movie_consensus_positive
    movie = Siskel.new("The Fifth Element")
    assert_equal "Thumbs Up", movie.consensus
  end

  def test_movie_consensus_negative
    movie = Siskel.new("Fantastic Four")
    assert_equal "Thumbs Down", movie.consensus
  end
end