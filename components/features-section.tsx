"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenTool, TrendingUp, Mic2, Share2, Search, PieChart, Sparkles, Smartphone, MessageSquare } from "lucide-react"

const mainFeatures = [
	{
		icon: PenTool,
		title: "AI Content Generation",
		description:
			"Generate high-converting blog posts, social media content, and ad copy in seconds with advanced AI writing tools.",
		features: [
			"Blog post generation",
			"Ad copy creation",
			"Social media content",
			"Email templates",
		],
		mockup: "content-studio",
	},
	{
		icon: TrendingUp,
		title: "Campaign Optimization",
		description:
			"Optimize your marketing campaigns with AI-driven insights and real-time performance analytics.",
		features: [
			"Real-time analytics",
			"A/B testing",
			"Budget optimization",
			"ROI tracking",
		],
		mockup: "analytics-dashboard",
	},
	{
		icon: Mic2,
		title: "Brand Voice AI",
		description:
			"Maintain consistent brand voice across all channels with AI that learns your unique style and tone.",
		features: [
			"Voice training",
			"Tone consistency",
			"Multi-channel publishing",
			"Content personalization",
		],
		mockup: "brand-voice",
	},
]

const marketingFeatures = [
	{
		icon: Share2,
		title: "Social Media Automation",
		description:
			"Schedule, optimize, and manage your social media presence with intelligent content recommendations.",
	},
	{
		icon: Search,
		title: "AI-Powered SEO",
		description:
			"Boost your search rankings with AI-generated meta tags, keywords, and content optimization.",
	},
	{
		icon: MessageSquare,
		title: "Smart Content Templates",
		description: "Access industry-specific templates and AI-powered content suggestions.",
	},
	{
		icon: PieChart,
		title: "Performance Analytics",
		description:
			"Track ROI, conversion rates, and campaign performance with AI-driven insights.",
	},
	{
		icon: Sparkles,
		title: "AI Content Enhancement",
		description:
			"Automatically enhance your content with AI-powered suggestions and improvements.",
	},
	{
		icon: Smartphone,
		title: "Multi-Channel Publishing",
		description:
			"Publish and optimize content across all your marketing channels seamlessly.",
	},
]

export function FeaturesSection() {
	return (
		<section id="features" className="py-12 sm:py-16 md:py-20 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
						Powerful Features
					</h2>
					<p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
						Discover how our AI-powered tools can transform your marketing strategy
						and drive better results
					</p>
				</div>

				{/* Main Features */}
				<div className="space-y-12 sm:space-y-16 md:space-y-20">
					{mainFeatures.map((feature, index) => (
						<div
							key={index}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}
						>
							{/* Content */}
							<div
								className={`space-y-4 sm:space-y-6 ${
									index % 2 === 1 ? "lg:col-start-2" : ""
								}`}
							>
								<div className="space-y-2 sm:space-y-4">
									<div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-lg flex items-center justify-center">
										<feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
									</div>
									<h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
										{feature.title}
									</h3>
									<p className="text-sm sm:text-base text-white/80 leading-relaxed">
										{feature.description}
									</p>
								</div>
								<div className="space-y-2 sm:space-y-3">
									{feature.features.map((item, itemIndex) => (
										<div
											key={itemIndex}
											className="flex items-center space-x-2 sm:space-x-3"
										>
											<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
											<span className="text-xs sm:text-sm text-white/70">
												{item}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Mockup */}
							<div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
								<Card variant="glass" className="p-4 sm:p-6">
									<div className="aspect-video bg-gradient-surface rounded-lg border border-white/10 flex items-center justify-center">
										{feature.mockup === "content-studio" ? (
											<div className="w-full h-full flex items-center justify-center">
												<div className="bg-gray-900 rounded-lg p-2 sm:p-4 border border-gray-700 w-full max-w-xs sm:max-w-lg mx-auto">
													{/* Top toolbar */}
													<div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4 pb-1 sm:pb-2 border-b border-gray-700">
														<div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
														<div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
														<div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
														<span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm">
															Content Studio
														</span>
													</div>
													{/* Editor interface */}
													<div className="space-y-2 sm:space-y-3">
														<div className="flex gap-1 sm:gap-2 mb-1 sm:mb-3">
															<div className="px-1 sm:px-2 py-1 bg-purple-600 text-white text-xs rounded">
																Bold
															</div>
															<div className="px-1 sm:px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
																Italic
															</div>
															<div className="px-1 sm:px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
																AI
															</div>
														</div>
														{/* Sample content */}
														<div className="bg-gray-800 p-2 sm:p-3 rounded text-xs sm:text-sm">
															<div className="text-white font-semibold mb-1 sm:mb-2">
																Blog Post: &ldquo;5 Marketing Trends for 2024&rdquo;
															</div>
															<div className="text-gray-300 text-xs leading-relaxed">
																Digital marketing continues to evolve at breakneck
																speed...{" "}
																<span className="bg-purple-600/20 text-purple-300 px-1 rounded">
																	AI-generated content
																</span>{" "}
																is transforming how brands connect with audiences...
															</div>
														</div>
														{/* AI suggestions panel */}
														<div className="bg-purple-900/30 border border-purple-500/30 p-1 sm:p-2 rounded text-xs">
															<div className="text-purple-300 font-medium mb-1">
																✨ AI Suggestions
															</div>
															<div className="text-gray-400">• Add call-to-action</div>
															<div className="text-gray-400">• Optimize for SEO</div>
														</div>
													</div>
												</div>
											</div>
										) : feature.mockup === "analytics-dashboard" ? (
											<div className="w-full h-full flex items-center justify-center">
												<div className="bg-gray-900 rounded-lg p-3 sm:p-6 border border-gray-700 w-full max-w-xs sm:max-w-lg mx-auto">
													{/* Dashboard Header */}
													<div className="flex items-center justify-between mb-3 sm:mb-6">
														<h3 className="text-white font-semibold text-sm sm:text-base">
															Campaign Analytics
														</h3>
														<div className="flex gap-1 sm:gap-2">
															<span className="px-1 sm:px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
																Live
															</span>
															<span className="text-gray-400 text-xs">
																Last 30 days
															</span>
														</div>
													</div>
													{/* KPI Cards */}
													<div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-6">
														<div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
															<div className="text-gray-400 text-xs mb-1">
																Total Clicks
															</div>
															<div className="text-white text-base sm:text-xl font-bold">
																24,847
															</div>
															<div className="text-green-400 text-xs">
																↗ +12.5%
															</div>
														</div>
														<div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
															<div className="text-gray-400 text-xs mb-1">
																Conversion Rate
															</div>
															<div className="text-white text-base sm:text-xl font-bold">
																8.2%
															</div>
															<div className="text-green-400 text-xs">
																↗ +3.1%
															</div>
														</div>
														<div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
															<div className="text-gray-400 text-xs mb-1">
																Cost per Click
															</div>
															<div className="text-white text-base sm:text-xl font-bold">
																$1.24
															</div>
															<div className="text-red-400 text-xs">
																↘ -8.7%
															</div>
														</div>
														<div className="bg-gray-800 p-2 sm:p-3 rounded-lg">
															<div className="text-gray-400 text-xs mb-1">
																ROAS
															</div>
															<div className="text-white text-base sm:text-xl font-bold">
																4.8x
															</div>
															<div className="text-green-400 text-xs">
																↗ +15.2%
															</div>
														</div>
													</div>
													{/* Chart Area */}
													<div className="bg-gray-800 p-2 sm:p-4 rounded-lg mb-2 sm:mb-4">
														<div className="flex items-center justify-between mb-1 sm:mb-3">
															<span className="text-gray-300 text-xs sm:text-sm">
																Performance Trend
															</span>
															<div className="flex gap-1 sm:gap-2">
																<div className="flex items-center gap-1">
																	<div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
																	<span className="text-gray-400 text-xs">
																		Clicks
																	</span>
																</div>
																<div className="flex items-center gap-1">
																	<div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
																	<span className="text-gray-400 text-xs">
																		Conversions
																	</span>
																</div>
															</div>
														</div>
														{/* Simple Chart Visualization */}
														<div className="h-10 sm:h-20 flex items-end gap-1">
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "60%" }}
															></div>
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "75%" }}
															></div>
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "45%" }}
															></div>
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "85%" }}
															></div>
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "70%" }}
															></div>
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "90%" }}
															></div>
															<div
																className="w-2 sm:w-4 bg-purple-500 rounded-t"
																style={{ height: "95%" }}
															></div>
														</div>
													</div>
													{/* AI Insights */}
													<div className="bg-purple-900/30 border border-purple-500/30 p-2 sm:p-3 rounded-lg">
														<div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
															<div className="w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded-full flex items-center justify-center">
																<span className="text-white text-xs">AI</span>
															</div>
															<span className="text-purple-300 font-medium text-xs sm:text-sm">
																Smart Insights
															</span>
														</div>
														<div className="text-gray-300 text-xs">
															• Best performing time: 2-4 PM EST (+23% CTR)
															<br />
															• Recommend increasing budget for Campaign A by 15%
														</div>
													</div>
												</div>
											</div>
										) : feature.mockup === "brand-voice" ? (
											<div className="w-full h-full flex items-center justify-center">
												<div className="bg-gray-900 rounded-lg p-2 sm:p-3 border border-gray-700 w-full max-w-xs sm:max-w-md mx-auto">
													{/* Brand Voice Header */}
													<div className="flex items-center justify-between mb-2 sm:mb-4 pb-1 sm:pb-2 border-b border-gray-700">
														<span className="text-white font-semibold text-xs sm:text-base">
															Brand Voice Editor
														</span>
														<span className="text-purple-400 text-xs px-1 sm:px-2 py-1 bg-purple-900/30 rounded">
															AI Powered
														</span>
													</div>
													{/* Tone Controls */}
													<div className="flex gap-1 sm:gap-2 mb-2 sm:mb-4">
														<div className="px-1 sm:px-2 py-1 bg-purple-600 text-white text-xs rounded">
															Confident
														</div>
														<div className="px-1 sm:px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
															Friendly
														</div>
														<div className="px-1 sm:px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
															Professional
														</div>
														<div className="px-1 sm:px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
															Witty
														</div>
													</div>
													{/* Brand Voice Sample */}
													<div className="bg-gray-800 p-2 sm:p-3 rounded text-xs sm:text-sm mb-1 sm:mb-3">
														<div className="text-white font-semibold mb-1">
															Sample Output
														</div>
														<div className="text-gray-300 text-xs leading-relaxed">
															<span className="text-purple-400 font-bold">
																ADmyBRAND
															</span>{" "}
															helps you amplify your message with a{" "}
															<span className="bg-purple-600/20 text-purple-300 px-1 rounded">
																confident
															</span>{" "}
															and{" "}
															<span className="bg-purple-600/20 text-purple-300 px-1 rounded">
																friendly
															</span>{" "}
															brand voice that resonates across every channel.
														</div>
													</div>
													{/* AI Suggestions */}
													<div className="bg-purple-900/30 border border-purple-500/30 p-1 sm:p-2 rounded text-xs">
														<div className="text-purple-300 font-medium mb-1">
															✨ AI Suggestions
														</div>
														<div className="text-gray-400">
															• Try a more conversational tone
														</div>
														<div className="text-gray-400">• Add a call-to-action</div>
														<div className="text-gray-400">
															• Personalize for audience segment
														</div>
													</div>
												</div>
											</div>
										) : (
											<div className="text-center space-y-2">
												<feature.icon className="h-8 sm:h-10 w-8 sm:w-10 text-purple-400 mx-auto" />
												<p className="text-xs sm:text-sm text-white/60">
													{feature.mockup} mockup
												</p>
											</div>
										)}
									</div>
								</Card>
							</div>
						</div>
					))}
				</div>

				{/* AI Marketing Tools Section */}
				<div className="mt-32">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							AI-Powered Marketing Tools
						</h2>
						<p className="text-lg text-white/80 max-w-3xl mx-auto">
							Everything you need to create, optimize, and scale your marketing
							campaigns with artificial intelligence
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{marketingFeatures.map((feature, index) => (
							<Card key={index} variant="glass" className="hover-lift group">
								<CardHeader className="pb-4">
									<div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<feature.icon className="h-5 w-5 text-white" />
									</div>
								</CardHeader>
								<CardContent className="space-y-3">
									<CardTitle className="text-white text-lg">
										{feature.title}
									</CardTitle>
									<p className="text-sm text-white/70 leading-relaxed">
										{feature.description}
									</p>
								</CardContent>
								<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Card>
						))}
					</div>

					<div className="text-center mt-12 space-y-4">
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								variant="gradient"
								size="lg"
								className="glass-button shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 cursor-pointer"
							>
								Start Creating Content
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="glass border-purple-500/20 text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
							>
								View Demo
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
